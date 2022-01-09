import API from '../../core/index.core';
import reportError from '../../helper/error.helper';
import {Request, Response, NextFunction} from 'express';

const Kategori = require('../../db/models').tbl_kategori;
const Artikel = require('../../db/models').tbl_artikel;

class KategoriList extends API{
    constructor(){
        super(Kategori)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{

            let data = await Kategori.findAll();

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

export default KategoriList