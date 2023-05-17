const express = require('express');
const server = express();
server.use(express.json());

const cursos = ['Node JS', 'JavaScript', 'React', 'React Show', 'VueJS'];

//Criando meu SELECT
server.get('/curso', (req, res)=>{
    return res.json(cursos);
});

//localhost:3000/curso
//Criando meu SELECT passando ID    
server.get('/curso/:index', (req, res) => {
    const {index} = req.params;
    return res.json(cursos[index]);
});

//Permitindo INSERIR dados via API
server.post('/curso', (req, res)=> {
    const { novo_curso } = req.body;
    cursos.push(novo_curso);

    return res.json(cursos);
});

//Permitindo UPDATE de um curso
server.put( '/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { curso } = req.body;

    cursos[index] = curso;
});

//Permitindo o DELETE de um curso
server.delete('/curso/:index', (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({message: "Curso deletado com sucesso!"});
})

server.listen(3000);