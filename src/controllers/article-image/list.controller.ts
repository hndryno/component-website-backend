import API from '../../core/index.core';
import {GambarArtikelInstance} from '../../models/gambarArtikel';
import {Request, Response, NextFunction} from 'express';

class ArtikelImageList extends API{
    constructor(){
        super(GambarArtikelInstance)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{

            let data = await GambarArtikelInstance.findAll();

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

export default ArtikelImageList