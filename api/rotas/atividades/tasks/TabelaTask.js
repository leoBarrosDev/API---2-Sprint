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

    async selecionarPorId(id) {
        const encontrada = await Modelo.findOne({
            where: {
                id: id
            }
        })
    },

    atualizar() {

    },

    remover() {

    }
}