//Router instanciado e utilizando merParams para que os parametros 
//utilizados em diferentes níveis possam ser utilizados
const roteador = require('express').Router({ mergeParams: true })
const TabelaTasks = require('./TabelaTask')
const Task = require('./Task')


roteador.get('/', async (req, res) => {
    const tasks = await TabelaTasks.listar(req.params.idAtividade)

    res.send(
        JSON.stringify(tasks)
    )
})

roteador.post('/', async (req, res) => {
    const idAtividade = req.params.idAtividade
    const corpo = req.body
    const dadosObtidos = Object.assign({}, corpo, {}, idAtividade)
    const task = new Task(dadosObtidos)
    await task.criar()
    res.status(201)
    res.send(task)
})

module.exports = roteador