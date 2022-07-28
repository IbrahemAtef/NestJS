'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {  
    return queryInterface.createTable('todos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // should it be unique
      },
      description: {
        type: Sequelize.STRING, // string or text
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('todos');
  }
};
