import API from '../../core/index.core';
import {ArtikelInstance} from '../../models/artikel';
import {Request, Response, NextFunction} from 'express';

class ArtikelUpdate extends API{
    constructor(){
        super(ArtikelInstance)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let { namaArtikel, deskripsiArtikel, kategoriId} = req.body

            let request_data:any = { namaArtikel, deskripsiArtikel, kategoriId }

            let data = await ArtikelInstance.update(request_data,{where:{id}})

            return res.status(201).json({
                status: 'success',
                message: 'artikel berhasil diupdate',
                data
            })
        }catch(err:any){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

export default ArtikelUpdate