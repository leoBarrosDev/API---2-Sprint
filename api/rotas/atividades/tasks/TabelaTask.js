const Modelo = require('./ModeloTabelaTasks')

module.exports = {
    listar(idAtividade) {
        return Modelo.findAll({
            where: {
                atividade: idAtividade
            }
        })
    },

    inserir(dadosObtidos) {
        return Modelo.create(dadosObtidos)
    },

    atualizar() {

    },

    remover() {

    }
}