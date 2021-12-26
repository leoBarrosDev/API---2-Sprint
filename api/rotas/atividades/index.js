const roteador = require('express').Router()
const TabelaAtividades = require('./TabelaAtividade')
const Atividade = require('./Atividade')



roteador.get('/', async (req, res) => {
    const resultados = await TabelaAtividades.listar()
    res.send(
        JSON.stringify(resultados)
    )
})


roteador.post('/', async (req, res) => {
    const dadosRecebidos = req.body
    const atividade = new Atividade(dadosRecebidos)
    await atividade.criar()
    res.status(201)
    res.send(
        JSON.stringify(atividade)
    )
})


module.exports = roteador