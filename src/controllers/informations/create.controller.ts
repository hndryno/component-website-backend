import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
const Information = require('../../db/models').tbl_information
// import {HeadersInstance} from '../../models/header';
import reportError from '../../helper/error.helper';

class InformationCreate extends API{
    constructor(){
        super(Information)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = uuidv4();

            let { namaLogo, namaWebsite, deskripsi, lokasi } = req.body

            let request_data:any = { id, namaLogo, namaWebsite, deskripsi, lokasi }

            let data = await Information.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'data berhasil dibuat',
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

export default InformationCreate