"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class IconInstance extends sequelize_1.Model {
}
exports.IconInstance = IconInstance;
IconInstance.init({
    id: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    nama: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    path: {
        type: sequelize_1.DataTypes.BLOB,
        allowNull: true
    },
    tag: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'tbl_icons'
});
