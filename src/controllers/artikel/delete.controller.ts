import API from '../../core/index.core';
import {ArtikelInstance} from '../../models/artikel';
import {Request, Response, NextFunction} from 'express';

class ArtikelDelete extends API{
    constructor(){
        super(ArtikelInstance)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await ArtikelInstance.destroy({where:{id}})

            return res.status(200).json({
                status: 'success',
                message: 'artikel berhasil dihapus',
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

export default ArtikelDelete