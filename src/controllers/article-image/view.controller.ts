import API from '../../core/index.core';
import {ArtikelInstance} from '../../models/artikel';
import {Request, Response, NextFunction} from 'express';
import path from 'path';

class ArtikelView extends API{
    constructor(){
        super(ArtikelInstance)
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
        }catch(err:any){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

export default ArtikelView