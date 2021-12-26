
const Modelo = require('./ModeloTabelaAtividade')

module.exports = {
    listar() {
        return Modelo.findAll()
    },

    inserir(atividade) {
        return Modelo.create(atividade)
    },

    async selecionarPorId(id) {
        const encontrada = await Modelo.findOne({
            where: {
                id: id
            }
        })

        if (!encontrada) {
            throw new Error('Atividade não encontrada')
        }

        return encontrada
    },

    atualizar(id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        )
    },

    remover(id) {
        return Modelo.destroy({
            where: { id: id }

        })
    }

}