const mongoose = require('mongoose');

const Funcionario = mongoose.model('Funcionario', {
    nome: String,
    cargo: String,
    salario: Number,
    contrato: Boolean,
})

module.exports = Funcionario;