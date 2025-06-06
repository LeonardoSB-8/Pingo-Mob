// Importação dos módulos necessários
const express = require('express');
const mysql = require('mysql2/promise'); // MySQL com suporte a Promises
const bcrypt = require('bcrypt');        // Para hash de senhas
const saltRounds = 10;                   // Nível de segurança do hash
const cors = require('cors');
const app = express();

// Configuração do CORS para permitir requisições de qualquer origem (desenvolvimento)
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middlewares globais
app.use(cors(corsOptions));      // Habilita CORS
app.options('*', cors(corsOptions)); // Habilita CORS para todas as rotas
app.use(express.json());         // Permite receber JSON no body das requisições

// Configuração do pool de conexões MySQL
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Root@12345<>',
  database: 'PINGO_C',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Testa a conexão com o banco ao iniciar o servidor
pool.getConnection()
  .then(conn => {
    console.log('Conectado ao MySQL!');
    conn.release();
  })
  .catch(err => {
    console.error('Erro ao conectar ao MySQL:', err);
    process.exit(1);
  });

/**
 * ROTA: POST /login
 * Descrição: Realiza o login do usuário verificando email e senha.
 */
app.post('/login', async (req, res) => {
  try {
    const { Email, Senha } = req.body;
    // Busca usuário pelo email
    const [rows] = await pool.execute(
      'SELECT * FROM Usuario WHERE Email = ?',
      [Email]
    );
    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
    }
    const user = rows[0];
    // Compara a senha informada com o hash salvo no banco
    const match = await bcrypt.compare(Senha, user.Senha);
    if (match) {
      const { Senha, ...userData } = user; // Remove a senha do retorno
      res.json({ success: true, user: userData, message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ success: false, message: 'Senha incorreta' });
    }
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ success: false, message: 'Erro no servidor' });
  }
});

/**
 * ROTA: POST /register
 * Descrição: Realiza o cadastro de um novo usuário, garantindo unicidade de email e CPF.
 */
app.post('/register', async (req, res) => {
  console.log('Dados recebidos no register:', req.body);
  try {
    const { NomeUsuario, Email, CPF, Senha } = req.body;

    // Verifica se já existe usuário com o mesmo email ou CPF
    const [existingUsers] = await pool.execute(
      'SELECT * FROM Usuario WHERE Email = ? OR CPF = ?',
      [Email, CPF.replace(/\D/g, '')]
    );
    if (existingUsers.length > 0) {
      const conflict = existingUsers[0].Email === Email ? 'Email' : 'CPF';
      return res.status(409).json({ 
        success: false, 
        message: `${conflict} já cadastrado` 
      });
    }

    // Gera hash da senha
    const hash = await bcrypt.hash(Senha, saltRounds);

    // Insere novo usuário no banco
    const [result] = await pool.execute(
      'INSERT INTO Usuario (NomeUsuario, Email, CPF, Senha) VALUES (?, ?, ?, ?)',
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

 /* ROTA: GET /quadras | Descrição: Retorna todas as quadras, incluindo esportes e fotos associadas. */
app.get('/quadras', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT 
        q.ID_Quadra,
        q.NomeQuadra,
        q.EnderecoQuadra,
        GROUP_CONCAT(DISTINCT e.NomeEsporte SEPARATOR ', ') AS Esportes,
        q.Descricao,
        q.Cidade,
        q.Bairro,
        q.Regiao,
        GROUP_CONCAT(DISTINCT fq.URL_Foto SEPARATOR '; ') AS Fotos
      FROM 
        Quadra q
      LEFT JOIN 
        QuadraEsporte qe ON q.ID_Quadra = qe.ID_Quadra
      LEFT JOIN 
        Esportes e ON qe.ID_Esporte = e.ID_Esporte
      LEFT JOIN 
        FotosQuadra fq ON q.ID_Quadra = fq.ID_Quadra
      GROUP BY 
        q.ID_Quadra
    `);

    res.json({ 
      success: true,
      quadras: results 
    });
  } catch (err) {
    console.error('Erro ao buscar quadras:', err);
    res.status(500).json({ 
      success: false,
      message: 'Erro ao buscar quadras' 
    });
  }
});

/**
 * ROTA: GET /quadras/:id
 * Descrição: Retorna detalhes de uma quadra específica pelo ID.
 */
app.get('/quadras/:id', async (req, res) => {
  try {
    const [results] = await pool.query(`
      SELECT 
        q.ID_Quadra,
        q.NomeQuadra,
        q.EnderecoQuadra,
        GROUP_CONCAT(DISTINCT e.NomeEsporte SEPARATOR ', ') AS Esportes,
        q.Descricao,
        q.Cidade,
        q.Bairro,
        q.Regiao,
        GROUP_CONCAT(DISTINCT fq.URL_Foto SEPARATOR '; ') AS Fotos
      FROM 
        Quadra q
      LEFT JOIN 
        QuadraEsporte qe ON q.ID_Quadra = qe.ID_Quadra
      LEFT JOIN 
        Esportes e ON qe.ID_Esporte = e.ID_Esporte
      LEFT JOIN 
        FotosQuadra fq ON q.ID_Quadra = fq.ID_Quadra
      WHERE 
        q.ID_Quadra = ?
      GROUP BY 
        q.ID_Quadra
    `, [req.params.id]);

    if (results.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Quadra não encontrada' 
      });
    }

    res.json({ 
      success: true,
      quadra: results[0] 
    });
  } catch (err) {
    console.error('Erro ao buscar quadra:', err);
    res.status(500).json({ 
      success: false,
      message: 'Erro ao buscar quadra' 
    });
  }
});

/**
 * ROTA: GET /health
 * Descrição: Rota de saúde para verificar se o servidor está online.
 */
app.get('/health', (req, res) => {
  res.json({ status: 'online', timestamp: new Date() });
});

// Middleware global para tratamento de erros não tratados
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
});

// Inicializa o servidor na porta definida (padrão: 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

