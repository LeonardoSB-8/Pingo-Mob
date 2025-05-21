const express = require('express');
const mysql = require('mysql2/promise'); // Usando a versão promise-based
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
const app = express();

// Configuração do CORS mais segura para desenvolvimento
const corsOptions = {
  origin: '*', // Permite qualquer origem (apenas para desenvolvimento)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200
};


// Middlewares
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

// Configuração do pool de conexões MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Root@12345<>',
  database: 'PINGO',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Testar conexão com o banco
pool.getConnection()
  .then(conn => {
    console.log('Conectado ao MySQL!');
    conn.release();
  })
  .catch(err => {
    console.error('Erro ao conectar ao MySQL:', err);
    process.exit(1);
  });

// Rota de login
app.post('/login', async (req, res) => {
  try {
    const { Email, Senha } = req.body;
    
    // 1. Busca o usuário pelo email
    const [rows] = await pool.execute(
      'SELECT * FROM usuario WHERE Email = ?',
      [Email]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
    }
    
    const user = rows[0];
    
    // 2. Compara a senha
    const match = await bcrypt.compare(Senha, user.Senha);
    
    if (match) {
      const { Senha, ...userData } = user;
      res.json({ success: true, user: userData });
    } else {
      res.status(401).json({ success: false, message: 'Senha incorreta' });
    }
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ success: false, message: 'Erro no servidor' });
  }
});

// Rota de registro
app.post('/register', async (req, res) => {
  console.log('Dados recebidos no register:', req.body);
  try {
    const { NomeUsuario, Email, CPF, Senha } = req.body;

    // 1. Verifica se usuário já existe
    const [existingUsers] = await pool.execute(
      'SELECT * FROM usuario WHERE Email = ? OR CPF = ?',
      [Email, CPF.replace(/\D/g, '')]
    );

    if (existingUsers.length > 0) {
      const conflict = existingUsers[0].Email === Email ? 'Email' : 'CPF';
      return res.status(409).json({ 
        success: false, 
        message: `${conflict} já cadastrado` 
      });
    }

    // 2. Cria hash da senha
    const hash = await bcrypt.hash(Senha, saltRounds);

    // 3. Insere novo usuário
    const [result] = await pool.execute(
      'INSERT INTO usuario (NomeUsuario, Email, CPF, Senha) VALUES (?, ?, ?, ?)',
      [NomeUsuario, Email, CPF.replace(/\D/g, ''), hash]
    );

    res.status(201).json({ 
      success: true,
      message: 'Usuário cadastrado com sucesso',
      userId: result.insertId
    });

  } catch (err) {
    console.error('Erro no servidor:', err);
    res.status(500).json({ 
      success: false,
      message: 'Erro interno no servidor',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});

// Rota de saúde do servidor
app.get('/health', (req, res) => {
  res.json({ status: 'online', timestamp: new Date() });
});

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

