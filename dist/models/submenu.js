"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenuInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const menu_1 = require("../models/menu");
class SubMenuInstance extends sequelize_1.Model {
}
exports.SubMenuInstance = SubMenuInstance;
SubMenuInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    menu_id: {
        type: sequelize_1.DataTypes.UUIDV4,
        allowNull: true
    },
    urutan: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    icon: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    target: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'tbl_submenus',
    modelName: 'submenu',
    underscored: true
});
SubMenuInstance.belongsTo(menu_1.MenuInstance, { foreignKey: 'menu_id', as: 'tbl_menus' });
// import {v4 as uuidv4} from 'uuid';
// 'use strict';
// module.exports = (sequelize:any, DataTypes:any) => {
//   const SubMenu = sequelize.define('submenu', {
//         id: {
//             type: DataTypes.UUIDV4,
//             primaryKey:true,
//             allowNull: false
//         },
//         nama: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         id_menu: {
//             type: DataTypes.UUIDV4,
//             allowNull: true
//         },
//         urutan: {
//             type: DataTypes.NUMBER,
//             allowNull: true
//         },
//         icon: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         url: {
//             type: DataTypes.STRING,
//             allowNull: true
//         },
//         target: {
//             type: DataTypes.STRING,
//             allowNull: true
//         }
//   }, {
//     underscored: true
//   });
//   SubMenu.associate = (models:any) => {
//     SubMenu.belongsTo(models.menu, { foreignKey : "id_menu", as: 'product'})
//     // associations can be defined here
//   };
//   SubMenu.beforeCreate((submenu: { id: string; }) => submenu.id = uuidv4())
//   return SubMenu;
// };
