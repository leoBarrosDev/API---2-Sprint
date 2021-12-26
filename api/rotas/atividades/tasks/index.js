const roteador = require('express').Router()
const TabelaTasks = require('./TabelaTask')
const Task = require('./Task')


roteador.get('/', (req, res) => {
    res.send(
        JSON.stringify([])
    )
})



module.exports = roteador