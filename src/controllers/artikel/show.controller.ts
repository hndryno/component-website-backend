import API from '../../core/index.core';
import {ArtikelInstance} from '../../models/artikel';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

class ArtikelShow extends API{
    constructor(){
        super(ArtikelInstance)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await ArtikelInstance.findOne({where:{ id}})

            return res.status(200).json({
                status: 'success',
                message: 'artikel berhasil ditampilkan',
                data
            })
        }catch(err:any){
            let message = 'Unknown Error'

            let error_result = await reportError(err, message)

            return res.status(400).json({
                error_result
            })
        }
    }
}

export default ArtikelShow