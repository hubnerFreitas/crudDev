'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('devs', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      sexo: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      hobby: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      dataNascimento: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('devs')
  }
};
