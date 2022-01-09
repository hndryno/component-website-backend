import API from '../../core/index.core';
const Information = require('../../db/models').tbl_information
import reportError from '../../helper/error.helper';

import {Request, Response, NextFunction} from 'express';

class HeaderUpdate extends API{
    constructor(){
        super(Information)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let { namaLogo, namaWebsite, deskripsi, lokasi } = req.body

            let request_data:any = { id, namaLogo, namaWebsite, deskripsi, lokasi }

            let data = await Information.update(request_data,{where:{id}})

            return res.status(201).json({
                status: 'success',
                message: 'header berhasil diupdate',
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

export default HeaderUpdate