import API from '../../core/index.core';
const Information = require('../../db/models').tbl_information
import reportError from '../../helper/error.helper';

import {Request, Response, NextFunction} from 'express';

class HeaderShow extends API{
    constructor(){
        super(Information)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await Information.findOne({where:{ id}})

            return res.status(200).json({
                status: 'success',
                message: 'header berhasil ditampilkan',
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

export default HeaderShow