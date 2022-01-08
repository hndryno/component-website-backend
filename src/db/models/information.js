const { v4: uuid } = require('uuid')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Header = sequelize.define('tbl_information', {
    namaLogo: DataTypes.STRING,
    namaWebsite: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    lokasi: DataTypes.STRING
  }, {
    underscored: true
  });
  Header.associate = (models) => {
    // associations can be defined here
  };
  // Header.beforeCreate(header => header.id = uuid())

  return Header;
};