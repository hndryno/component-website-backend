"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const submenu_1 = require("../models/submenu");
class MenuInstance extends sequelize_1.Model {
}
exports.MenuInstance = MenuInstance;
MenuInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    urutan: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    icon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'tbl_menus',
    modelName: 'menu'
});
MenuInstance.hasMany(submenu_1.SubMenuInstance, {
    onDelete: 'casecade'
});
