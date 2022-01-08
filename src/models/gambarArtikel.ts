import {DataTypes, Model} from 'sequelize';
import db from '../config/database.config'

interface GambarArtikel {
    id: String,
    type: String,
    nama: String,
    data: Blob
}

export class GambarArtikelInstance extends Model<GambarArtikel>{}

GambarArtikelInstance.init({
        id: {
            type: DataTypes.UUIDV4,
            primaryKey:true,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        data: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize: db,
        tableName: 'GambarArtikels'
    }
)