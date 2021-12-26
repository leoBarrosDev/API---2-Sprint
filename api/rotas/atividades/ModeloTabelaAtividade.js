
const Sequelize = require('sequelize')
const instancia = require('../../banco-de-dados')


const colunas = {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description:{
      type: Sequelize.STRING,
      allowNull: false
    }
    /*
    task: {
      type: Sequelize.STRING,
      allowNull: false
    }
    */
  
  }

const opcoes = {
    freezeTableName: true,
    tableName: 'atividades',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao'

}
module.exports = instancia.define('atividades', colunas, opcoes)