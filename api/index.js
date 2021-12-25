const express = require('express')
const app = express()
const config = require('config')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const roteador = require('./rotas/atividades')
app.use('/api/atividades', roteador)


app.listen(config.get('api.porta'), ()=> console.log('API FUNCIONANDO'))