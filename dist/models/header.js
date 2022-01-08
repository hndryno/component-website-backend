"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class HeadersInstance extends sequelize_1.Model {
}
exports.HeadersInstance = HeadersInstance;
HeadersInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    namaLogo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    namaWebsite: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    deskripsi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    lokasi: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'Headers'
});
// const { v4: uuid } = require('uuid')
// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Header = sequelize.define('headers', {
//     namaLogo: DataTypes.STRING,
//     namaWebsite: DataTypes.STRING,
//     deskripsi: DataTypes.STRING,
//     lokasi: DataTypes.STRING
//   }, {
//     underscored: true
//   });
//   Header.associate = (models) => {
//     // associations can be defined here
//   };
//   Header.beforeCreate(header => header.id = uuid())
//   return Header;
// };
// const { v4: uuid } = require('uuid')
// 'use strict';
// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Headers', {
//       id: {
//         type: DataTypes.UUIDV4,
//         primaryKey:true,
//         allowNull: false
//       },
//       namaLogo: {
//         type: Sequelize.STRING
//       },
//       namaWebsite: {
//         type: Sequelize.STRING
//       },
//       deskripsi: {
//         type: Sequelize.STRING
//       },
//       lokasi: {
//         type: Sequelize.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: Sequelize.DATE
//       }
//     });
//   },
//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Headers');
//   }
// };
