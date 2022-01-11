'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_artikels', {
      id: {
        primaryKey:true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      nama_artikel: {
        type: Sequelize.STRING
      },
      deskripsi_artikel: {
        type: Sequelize.TEXT
      },
      isi: {
        type: Sequelize.TEXT
      },
      kategori_id: {
          type: Sequelize.UUID,
          onDelete: 'CASCADE',
          references: {
            model: 'tbl_kategoris',
            key: 'id'
        },
      },
      gambar_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'tbl_gambars',
          key: 'id'
        },
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
    await queryInterface.dropTable('tbl_artikels');
  }
};