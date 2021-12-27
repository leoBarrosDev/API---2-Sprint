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
            
        })

        this.id = resultado.id
        this.atividade = resultado.atividade

    }

}


module.exports = Task