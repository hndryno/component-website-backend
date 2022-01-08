import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
const Article = require('../../db/models').tbl_artikel;

class ArtikelImage extends API{
    constructor(){
        super(Article)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{    
            console.log('masuk heheheh')
            console.log(req.file)
            const id = uuidv4();

            let nama = req.file?.originalname
            let type = req.file?.mimetype
            let data = req.file?.path
            // let fileName:any = (file.substr(0, file.lastIndexOf('.')))
            // let unique_filename = uuidv4(fileName)

            // let { type, data, nama } = req.body

            // let request_data:any = { id, nama, type, data }

            // let data_response = await GambarArtikelInstance.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'artikel berhasil dibuat',
                // data: data_response
            })
        }catch(err){
            return res.status(400).json({
                status: 'error',
                message: err
            })
        }
    }
}

export default ArtikelImage