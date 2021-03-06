import API from '../../core/index.core';
import reportError from '../../helper/error.helper';

import {Request, Response, NextFunction} from 'express';
const Information = require('../../db/models').tbl_information
const Gambar = require('../../db/models').tbl_gambar

class InformationShow extends API{
    constructor(){
        super(Information)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await Information.findOne({where:{ id}, include: [
                { model : Gambar, as:'info_gambar'}
            ]})

            return res.status(200).json({
                status: 'success',
                message: 'data berhasil ditampilkan',
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

export default InformationShow