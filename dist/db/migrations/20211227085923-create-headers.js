'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_informations', {
      id: {
        primaryKey:true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      nama_logo: {
        type: Sequelize.STRING
      },
      nama_website: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      lokasi: {
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
    await queryInterface.dropTable('tbl_informations');
  }
};