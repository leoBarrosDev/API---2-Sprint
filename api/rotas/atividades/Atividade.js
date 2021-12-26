const TabelaAtividade = require('./TabelaAtividade')


class Fornecedor {
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

}

module.exports = Fornecedor