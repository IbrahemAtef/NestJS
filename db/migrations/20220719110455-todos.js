'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
    return queryInterface.createTable('todos', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('todos');
  }
};
