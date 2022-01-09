import API from '../../core/index.core';
import reportError from '../../helper/error.helper';
import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';

const Kategori = require('../../db/models').tbl_kategori

class KategoriUpdate extends API{
    constructor(){
        super(Kategori)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let { nama_kategori, deskripsi_kategori } = req.body

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).send({
                    status: "Error",
                    message: errors.array()
                });
            }

            let request_data:any = { nama_kategori, deskripsi_kategori }

            let data = await Kategori.update(request_data,{where:{id}})

            return res.status(201).json({
                status: 'success',
                message: 'kategori berhasil diupdate',
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

export default KategoriUpdate