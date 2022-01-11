'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artikel = sequelize.define('tbl_artikel', {
    nama_artikel: DataTypes.STRING,
    deskripsi_artikel: DataTypes.STRING,
    kategori_id: DataTypes.UUID,
    gambar_id: DataTypes.UUID,
    isi: DataTypes.STRING
  }, {
    underscored: true
  });
  Artikel.associate = (models) => {
    // Artikel.hasOne(models.tbl_gambar, {foreignKey: 'gambar_id', as: 'tbl_gambars', sourceKey: 'id'})
    Artikel.belongsTo(models.tbl_kategori, {foreignKey: 'kategori_id', as: 'tbl_kategoris', targetKey: 'id'})
    Artikel.belongsTo(models.tbl_gambar, {foreignKey: 'gambar_id', as: 'tbl_gambars', targetKey: 'id'})
    // associations can be defined here
  };
  // Artikel.beforeCreate(artikel => artikel.id = uuid())
  // Artikel

  return Artikel;
};