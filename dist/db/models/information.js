const { v4: uuid } = require('uuid')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Header = sequelize.define('tbl_information', {
    nama_logo: DataTypes.STRING,
    nama_website: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    gambar_id: DataTypes.UUID

  }, {
    underscored: true
  });
  Header.associate = (models) => {
    // associations can be defined here
    Header.belongsTo(models.tbl_gambar, {foreignKey: 'gambar_id', as: 'info_gambar', targetKey: 'id'})
  };
  // Header.beforeCreate(header => header.id = uuid())

  return Header;
};