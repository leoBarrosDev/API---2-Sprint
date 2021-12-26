const ModeloTabela = require('../rotas/tasks/ModeloTabelaTasks')

ModeloTabela
    .sync()
    .then(() => console.log(
        'Tabela tasks criada com sucesso'
    ))
    .catch(console.log)