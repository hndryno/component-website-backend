'use strict';
module.exports = (sequelize, DataTypes) => {
  const Icon = sequelize.define('icons', {
    nama: DataTypes.STRING,
    path: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    underscored: true
  });
  Icon.associate = (models) => {
    // associations can be defined here
  };
  // Icon.beforeCreate(icon => icon.id = uuid())

  return Icon;
};