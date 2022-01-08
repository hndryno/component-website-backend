import API from '../../core/index.core';
import {GambarArtikelInstance} from '../../models/gambarArtikel';
import {Request, Response, NextFunction} from 'express';
import path from 'path';
import fs from 'fs';

class ArtikelImageDelete extends API{
    constructor(){
        super(GambarArtikelInstance)
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
        }catch(err:any){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

export default ArtikelImageDelete