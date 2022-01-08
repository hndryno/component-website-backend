'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_menus', {
      id: {
        primaryKey:true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      nama: {
        type: Sequelize.STRING
      },
      urutan: {
        type: Sequelize.STRING
      },
      icon: {
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
    await queryInterface.dropTable('tbl_menus');
  }
};