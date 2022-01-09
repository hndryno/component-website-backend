import API from '../../core/index.core';
const Article = require('../../db/models').tbl_artikel;
import {Request, Response, NextFunction} from 'express';
import path from 'path';
import fs from 'fs';
import reportError from '../../helper/error.helper';


class ArtikelImageDelete extends API{
    constructor(){
        super(Article)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{    

            let dir = path.join(__dirname, '../../../uploads')

            let delete_image = await fs.unlinkSync(`${dir}/1641019526719-geek-avatar.jpg`);

            console.log(delete_image);

            return res.status(201).json({
                status: 'success',
                message: 'artikel berhasil dibuat',
                // data: data_response
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

export default ArtikelImageDelete