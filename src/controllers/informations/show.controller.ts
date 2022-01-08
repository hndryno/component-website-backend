import API from '../../core/index.core';
import {HeadersInstance} from '../../models/header';
import {Request, Response, NextFunction} from 'express';

class HeaderShow extends API{
    constructor(){
        super(HeadersInstance)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await HeadersInstance.findOne({where:{ id}})

            return res.status(200).json({
                status: 'success',
                message: 'header berhasil ditampilkan',
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

export default HeaderShow