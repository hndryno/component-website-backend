const { v4: uuid } = require('uuid')

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('tbl_menu', {
    nama: DataTypes.STRING,
    link: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    underscored: true
  });
  Menu.associate = (models) => {
    // associations can be defined here

    Menu.hasMany(models.tbl_submenu, {as: 'tbl_submenus', foreignKey: 'menu_id', sourceKey: 'id'})
  };
  // Menu.beforeCreate(Menu => menu.id = uuid())

  return Menu;
};