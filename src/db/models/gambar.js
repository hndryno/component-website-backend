const { v4: uuid } = require('uuid')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gambar = sequelize.define('tbl_gambar', {
    // id: DataTypes.UUID,
    filename: DataTypes.STRING,
    original_name: DataTypes.STRING,
    path: DataTypes.STRING,
    mimetype: DataTypes.STRING,
  }, {
    underscored: true
  });
  Gambar.associate = (models) => {
    // Gambar.belongsTo(models.tbl_artikel, {foreignKey: 'gambar_id', as: 'tbl_gambar', targetKey: 'id'});
    Gambar.hasOne(models.tbl_artikel, {foreignKey: 'gambar_id', as: 'tbl_gambars', sourceKey: 'id'});
    // SubMenu.belongsTo(models.tbl_submenu, {foreignKey: 'submenu_id', as: 'tbl_submenu', targetKey: 'id'});
    // associations can be defined here
  };
  // GambarArtikel.beforeCreate(gambarartikels => gambarartikels.id = uuid());

  return Gambar;
};