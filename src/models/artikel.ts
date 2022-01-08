import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config'

interface Artikel {
    id: String,
    namaArtikel: String,
    deskripsiArtikel: String,
    kategoriId: String
}

export class ArtikelInstance extends Model<Artikel>{}

ArtikelInstance.init({
        id: {
            type: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        namaArtikel: {
            type: DataTypes.STRING,
            allowNull: true
        },
        deskripsiArtikel: {
            type: DataTypes.STRING,
            allowNull: true
        },
        kategoriId: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: db,
        tableName: 'Artikel'
    }
)