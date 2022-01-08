'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_submenus', {
      id: {
        primaryKey:true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      nama: {
        type: Sequelize.STRING
      },
      menu_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
          references: {
            model: 'tbl_menus',
            key: 'id'
        },
      },
      submenu_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
          references: {
            model: 'tbl_submenus',
            key: 'id'
        },
      },
      urutan: {
        type: Sequelize.STRING
      },
      icon: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      target: {
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
    await queryInterface.dropTable('tbl_submenus');
  }
};