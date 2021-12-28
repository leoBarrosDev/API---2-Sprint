const TabelaTask = require('./TabelaTask')

class Task {
    constructor({ id, title, taskRelevance, completed, atividade }) {
        this.id = id
        this.title = title
        this.taskRelevance = taskRelevance
        this.completed = completed
        this.atividade = atividade
    }

    async criar() {
        const resultado = await TabelaTask.inserir({
            title: this.title,
            taskRelevance: this.taskRelevance,
            completed: this.completed,
            atividade: this.atividade

        })

        this.id = resultado.id
        this.atividade = resultado.atividade

    }

    async carregar() {
        const encontrada =
            await TabelaTask.selecionarPorId(this.id)
        this.id = encontrada.id
        this.title = encontrada.title
        this.taskRelevance = encontrada.taskRelevance
        this.completed = encontrada.completed
    }

}


module.exports = Task