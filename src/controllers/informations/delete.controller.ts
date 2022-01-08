import API from '../../core/index.core';
import {HeadersInstance} from '../../models/header';
import {Request, Response, NextFunction} from 'express';

class HeaderDelete extends API{
    constructor(){
        super(HeadersInstance)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await HeadersInstance.destroy({where:{id}})

            return res.status(200).json({
                status: 'success',
                message: 'header berhasil dihapus',
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

export default HeaderDelete