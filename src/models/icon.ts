import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config'

interface Icon {
    id: String,
    nama: String,
    path: String,
    tag: String
}

export class IconInstance extends Model<Icon>{}

IconInstance.init({
        id: {
            type: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: true
        },
        path: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        tag: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: db,
        tableName: 'tbl_icons'
    }
)