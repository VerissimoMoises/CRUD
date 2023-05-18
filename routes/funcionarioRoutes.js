const router = require('express').Router();
const Funcionario = require('../models/Funcionario');

//POST (iINSERT) Inserindo um novo funcionário no MongoDB
router.post('/funcionario', (req, res) => {
    const {nome, cargo, salario, desligado} = req.body;
    if(!nome && !cargo && !salario && !desligado){
        res.status(422).json({ error: 'Informar o nome, cargo, salario e desligado é obrigatório!'});
    }
    const funcionario = {
        nome, 
        cargo,
        salario,
        desligado,
    };
    try {
        Funcionario.create(funcionario);
        res.status(201).json({message: 'Funcionário cadastrado com sucesso!'})
    } catch(error) {
        res.status(500).json({error: error});
    }
})

module.exports = router;