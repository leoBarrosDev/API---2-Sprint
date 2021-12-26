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

roteador.get('/:idAtividade', async (req, res) => {

    try {
        const id = req.params.idAtividade
        const atividade = new Atividade({ id: id })
        await atividade.carregar()
        res.status(200)
        res.send(
            JSON.stringify(atividade)
        )

    } catch (erro) {
        res.status(404)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.put('/:idAtividade', async (req, res) => {

    try {
        const id = req.params.idAtividade
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, { id: id })
        const atividade = new Atividade(dados)
        await atividade.atualizar()
        res.status(200)
        res.end()
    } catch (erro) {
        res.status(404)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )
    }
})

roteador.delete('/:idAtividade', async (req, res) => {
    try {
        const id = req.params.idAtividade
        const atividade = new Atividade({ id: id })
        await atividade.carregar()
        await atividade.remover()
        res.status(204)
        res.end
    } catch (erro) {
        res.status(404)
        res.send(
            JSON.stringify({
                mensagem: erro.message
            })
        )

    }
})

module.exports = roteador