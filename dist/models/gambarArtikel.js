"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GambarArtikelInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class GambarArtikelInstance extends sequelize_1.Model {
}
exports.GambarArtikelInstance = GambarArtikelInstance;
GambarArtikelInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    data: {
        type: sequelize_1.DataTypes.BLOB,
        allowNull: true
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'GambarArtikels'
});
