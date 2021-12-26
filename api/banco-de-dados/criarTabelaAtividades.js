const ModeloTabela = require('../rotas/atividades/ModeloTabelaAtividade')

ModeloTabela
    .sync()
    .then(() => console.log(
        'Tabela atividades criada com sucesso'
    ))
    .catch(console.log)