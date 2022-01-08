"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtikelInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class ArtikelInstance extends sequelize_1.Model {
}
exports.ArtikelInstance = ArtikelInstance;
ArtikelInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    namaArtikel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    deskripsiArtikel: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    kategoriId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'Artikel'
});
