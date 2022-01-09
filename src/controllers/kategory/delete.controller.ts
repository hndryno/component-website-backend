import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

const Kategori = require('../../db/models').tbl_kategori

class KategoriDelete extends API{
    constructor(){
        super(Kategori)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await Kategori.destroy({where:{id}})

            return res.status(200).json({
                status: 'success',
                message: 'header berhasil dihapus',
                data
            })
        }catch(err){
            let message = 'Unknown Error';

            let error_result = await reportError(err, message)

            return res.status(400).json({
                error_result
            })
        }
    }
}

export default KategoriDelete