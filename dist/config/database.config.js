"use strict";
// import {Sequelize} from 'sequelize'
Object.defineProperty(exports, "__esModule", { value: true });
// let db_name = process.env.DB_NAME
// const db = new Sequelize('db_component_website', 'root', 'Hendriyono1!', {
//     host: '127.0.0.1',
//     dialect: 'mysql',
// })
// export default db;
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('db_component_website', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
});
exports.default = db;
