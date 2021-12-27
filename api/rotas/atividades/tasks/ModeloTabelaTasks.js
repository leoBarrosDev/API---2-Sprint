const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const instancia = require('../../../banco-de-dados')

const colunas = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    taskRelevance: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    atividade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../ModeloTabelaAtividade'),
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