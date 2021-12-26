const Modelo = require('./ModeloTabelaAtividade')

module.exports = {
    listar() {
        return Modelo.findAll()
    },

    inserir(atividade){
        return Modelo.create(atividade)
    }
}