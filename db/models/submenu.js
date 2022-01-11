'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubMenu = sequelize.define('tbl_submenu', {
    nama: DataTypes.STRING,
    menu_id: DataTypes.UUID,
    submenu_id: DataTypes.UUID,
    urutan: DataTypes.STRING,
    icon: DataTypes.STRING,
    url: DataTypes.STRING,
    target: DataTypes.STRING,
    
  }, {
    underscored: true
  });
  SubMenu.associate = (models) => {
    // associations can be defined here
    SubMenu.belongsTo(models.tbl_menu, {foreignKey: 'menu_id', as: 'tbl_menus', targetKey: 'id'});
    SubMenu.hasMany(models.tbl_submenu, {foreignKey: 'submenu_id', as: 'tbl_submenus', sourceKey: 'id'})
    SubMenu.belongsTo(models.tbl_submenu, {foreignKey: 'submenu_id', as: 'tbl_submenu', targetKey: 'id'});
  };
  // Menu.beforeCreate(Menu => menu.id = uuid())

  return SubMenu;
};