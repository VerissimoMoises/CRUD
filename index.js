// const express = require('express');
// const server = express();
// server.use(express.json());

// const cursos = ['Node JS', 'JavaScript', 'React', 'React Show', 'VueJS'];

// //Criando meu SELECT
// server.get('/curso', (req, res)=>{
//     return res.json(cursos);
// });

// //localhost:3000/curso
// //Criando meu SELECT passando ID    
// server.get('/curso/:index', (req, res) => {
//     const {index} = req.params;
//     return res.json(cursos[index]);
// });

// //Permitindo INSERIR dados via API
// server.post('/curso', (req, res)=> {
//     const { novo_curso } = req.body;
//     cursos.push(novo_curso);

//     return res.json(cursos);
// });

// //Permitindo UPDATE de um curso
// server.put( '/cursos/:index', (req, res) => {
//     const { index } = req.params;
//     const { curso } = req.body;

//     cursos[index] = curso;
// });

// //Permitindo o DELETE de um curso
// server.delete('/curso/:index', (req, res) => {
//     const { index } = req.params;

//     cursos.splice(index, 1);
//     return res.json({message: "Curso deletado com sucesso!"});
// })

// server.listen(3000);

// Recomeçando a configuração

const express = require('express');
const mongoose = require('mongoose');
const server = express();

const funcionarioRoutes = require('./routes/funcionarioRoutes');

//Middleware
server.use(
    express.urlencoded({
        extended: true
    }),
);

server.use(express.json());

//Criando o endpoint e rotas da minha API
server.use('funcionario', funcionarioRoutes);

//Conexão com Mongoose Atlas
const DB_USER = 'moises';
const DB_PASSWORD = encodeURIComponent('dfcwi623XXzsDfQ0');

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.5stk3ub.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectando ao MongooseDB!');
    })
    .catch((err) => {
        console.log(err)
    })

//Porta do servidor
server.listen(3000);