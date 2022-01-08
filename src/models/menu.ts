import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config'
import {SubMenuInstance} from '../models/submenu';

interface Menu {
    id: String,
    nama: String,
    urutan: String,
    icon: String,
}

export class MenuInstance extends Model<Menu>{}

MenuInstance.init({
        id: {
            type: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: true
        },
        urutan: {
            type: DataTypes.STRING,
            allowNull: true
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: db,
        tableName: 'tbl_menus',
        modelName: 'menu'
    }
)

MenuInstance.hasMany(SubMenuInstance, {
    onDelete: 'casecade'
});
