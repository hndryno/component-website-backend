import { RandomUUIDOptions } from 'crypto';
import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config';
import {MenuInstance} from '../models/menu';

interface SubMenu {
    id: String,
    nama: String,
    menu_id: RandomUUIDOptions,
    urutan: Number,
    icon: String,
    url: String,
    target: String
}

export class SubMenuInstance extends Model<SubMenu>{}

SubMenuInstance.init({
        id: {
            type: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: true
        },
        menu_id: {
            type: DataTypes.UUIDV4,
            allowNull: true
        },
        urutan: {
            type: DataTypes.NUMBER,
            allowNull: true
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },
        target: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: db,
        tableName: 'tbl_submenus',
        modelName: 'submenu',
        underscored: true
    },
)

SubMenuInstance.belongsTo(MenuInstance, {foreignKey: 'menu_id', as: 'tbl_menus'});

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
