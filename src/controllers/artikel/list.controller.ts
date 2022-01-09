import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

const Artikel = require('../../db/models').tbl_artikel;
const Gambar = require('../../db/models').tbl_gambar;
const Kategori = require('../../db/models').tbl_kategori

class ArtikelList extends API{
    constructor(){
        super(Artikel)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{

            let data = await Artikel.findAll({
                include : [
                    { model : Kategori, as:'tbl_kategoris'},
                    { model: Gambar,  as: 'tbl_gambars'}
                ],
            })

            return res.status(200).json({
                status: 'success',
                message: 'header berhasil ditampilkan',
                data
            }) 
        }catch(err){
            let message = 'Unknown Error'

            let error_result = await reportError(err, message)

            return res.status(400).json({
                error_result
            })
        } 
    }
}

export default ArtikelList