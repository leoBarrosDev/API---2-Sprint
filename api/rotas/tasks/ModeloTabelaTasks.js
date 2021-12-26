const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')

const colunas = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    taskRelevance: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed: {
        type: Sequelize.ENUM('false', 'true'),
        allowNull: false
    },
    tarefas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../atividades/ModeloTabelaAtividade'),
            key: 'id'
        }
    }
}

const opcoes = {
    freezeTablename: true,
    tableName: 'tasks',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao'
}

module.exports = instancia.define('tasks', colunas, opcoes)