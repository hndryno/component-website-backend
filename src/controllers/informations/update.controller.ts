import API from '../../core/index.core';
import {HeadersInstance} from '../../models/header';
import {Request, Response, NextFunction} from 'express';

class HeaderUpdate extends API{
    constructor(){
        super(HeadersInstance)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let { namaLogo, namaWebsite, deskripsi, lokasi } = req.body

            let request_data:any = { id, namaLogo, namaWebsite, deskripsi, lokasi }

            let data = await HeadersInstance.update(request_data,{where:{id}})

            return res.status(201).json({
                status: 'success',
                message: 'header berhasil diupdate',
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

export default HeaderUpdate