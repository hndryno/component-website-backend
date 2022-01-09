import API from '../../core/index.core';
const Article = require('../../db/models').tbl_artikel;
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

class ArtikelImageList extends API{
    constructor(){
        super(Article)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{

            let data = await Article.findAll();

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

export default ArtikelImageList