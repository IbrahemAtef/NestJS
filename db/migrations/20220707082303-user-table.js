'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate : {
            isEmail: true,     
          }
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        gender: {
          type: Sequelize.ENUM('MALE', 'FEMALE'),
          allowNull: false,
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
