'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_gambars', {
      id: {
        primaryKey:true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      original_name: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      mimetype: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_gambars');
  }
};