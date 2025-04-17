// const express=require('express');
// const cors=require('cors');
// const bodyParser=require('body-parser');
// const app=express();
// /*****************************************/
// app.use(bodyParser.json());
// /*****************************************/
// app.use(cors());
// app.use(bodyParser.urlencoded({extended:false}));
// const models=require('./models');
// const { where } = require('sequelize');
// /*****************************************/
// app.get('/',(req,res)=>{
//     res.send('Servidor backend já esta rodando!');
// });
// /* Instanciando modelos de banco*/

// let usuario=models.Usuario;

// app.get('/createUser', async (req,res)=>{
//     let create=await usuario.create({
//         nome: req.body.nome,
//         password: req.body.password,
//         createAt: new Date(),
//         updateAt: new Date()
//     });
// });

// app.get('/read', async(req,res)=>{
//     let read=await User.findAll({
//         raw:true,
//     });
//     console.log(read);
// });

// app.get('/update' , async (req,res)=> {
//     let update=await usuario.findByPk(3).then((response)=>{
//         response.nome="Flavio";
//         response.save();
//     });
//     console.log(update);
// });

// app.get('/delete', async (req,res)=>{
//     usuario.destroy({
//         where:{id:2}
//     });
// });

// app.post('/login', async (req,res)=>{
//     let response=await user.findOne({
//         where:{name:req.body.name, password: req.body.password}
//     });
// if(response === null){
//     res.send(JSON.stringify('error'));
// }else{
//     res.send(response);
// }

// });

// let port=process.env.PORT || 3000;
// app.listen(port,(req,res)=>{
//     console.log('Servidor Rodando!!')
// });