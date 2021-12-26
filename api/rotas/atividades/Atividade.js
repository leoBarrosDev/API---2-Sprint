const TabelaAtividade = require('./TabelaAtividade')


class Atividade {
    constructor({ id, title, description, dataCriacao, dataAtualizacao, task }) {
        this.id = id
        this.title = title
        this.description = description
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        //this.task = task
    }

    async criar() {
        const resultado = await TabelaAtividade.inserir({
            title: this.title,
            description: this.description,
            //task: this.task
        })
        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao
    }

    async carregar() {
        const encontrada =
            await TabelaAtividade.selecionarPorId(this.id)
        this.title = encontrada.title
        this.description = encontrada.description
        this.dataCriacao = encontrada.dataCriacao
        this.dataAtualizacao = encontrada.dataAtualizacao
    }

    async atualizar() {
        await TabelaAtividade.selecionarPorId(this.id)
        const campos = ['title', 'description']
        const dadosParaAtualizar = {}

        campos.forEach((campo) => {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor
            }
        })

        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new Error('Nenhum dado fornecido')
        }

        await TabelaAtividade.atualizar(this.id, dadosParaAtualizar)
    }

    remover() {
        return TabelaAtividade.remover(this.id)
    }

}

module.exports = Atividade