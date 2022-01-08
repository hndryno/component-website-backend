import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config'

interface Kategori {
    id: String,
    namaKategori: String,
    deskripsiKategori: String,
}

export class KategoriInstance extends Model<Kategori>{}

KategoriInstance.init({
        id: {
            type: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        namaKategori: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deskripsiKategori: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: db,
        tableName: 'Kategori'
    }
)