const express = require('express')
const app = express()
const config = require('config')
require('./banco-de-dados/criarTabelas')

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const roteador = require('./rotas/atividades')
app.use('/api/project', roteador)


app.listen(config.get('api.porta'), ()=> console.log('API FUNCIONANDO'))