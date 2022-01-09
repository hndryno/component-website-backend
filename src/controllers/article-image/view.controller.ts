import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
const Article = require('../../db/models').tbl_artikel;
import path from 'path';
import reportError from '../../helper/error.helper';

class ArtikelView extends API{
    constructor(){
        super(Article)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            let base_dir = path.join(__dirname, "/uploads")

            let image = `${base_dir}/1641011733263-geek-avatar.jpg`

            // let image = `/uploads/1641011733263-geek-avatar.jpg`

            // let image = './1641011733263-geek-avatar.jpg'


            // console.log(base_dir)
            // let data = await ArtikelInstance.findAll();

            return res.sendFile(image);

            // return res.status(200).json({
            //     status: 'success',
            //     message: 'data berhasil ditampilkan',
            //     data: image
            // })
        }catch(err){
            let message = 'Unknown Error'

            let error_result = await reportError(err, message)

            return res.status(400).json({
                error_result
            })
        }
    }
}

export default ArtikelView