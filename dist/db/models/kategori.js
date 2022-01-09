const { v4: uuid } = require('uuid')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Kategori = sequelize.define('tbl_kategori', {
    nama_kategori: DataTypes.STRING,
    deskripsi_kategori: DataTypes.STRING
  }, {
    underscored: true
  });
  Kategori.associate = (models) => {
    // associations can be defined here
    Kategori.hasOne(models.tbl_artikel, {foreignKey: 'kategori_id', as: 'tbl_kategoris', sourceKey: 'id'});
  };
  // Kategori.beforeCreate(kategori => kategori.id = uuid())

  return Kategori;
};