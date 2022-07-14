'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        gender: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      });
    } catch (error) {
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable('users');
    } catch (error) {
      throw error;
    }
  },
};
