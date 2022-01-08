import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config'

interface Headers {
    id: String,
    namaLogo: String,
    namaWebsite: String,
    deskripsi: String,
    lokasi: String
}

export class HeadersInstance extends Model<Headers>{}

HeadersInstance.init({
        id: {
            type: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        namaLogo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        namaWebsite: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deskripsi: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lokasi: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },
    {
        sequelize: db,
        tableName: 'Headers'
    }
)

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