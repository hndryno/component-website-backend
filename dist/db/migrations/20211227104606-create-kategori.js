'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_kategoris', {
      id: {
        primaryKey:true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      nama_kategori: {
        type: Sequelize.STRING
      },
      deskripsi_kategori: {
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
    await queryInterface.dropTable('tbl_kategoris');
  }
};