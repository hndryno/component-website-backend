import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

import path from 'path';
import fs from 'fs';
let dir = path.join(__dirname, '../../../uploads');

let Artikel = require('../../db/models').tbl_artikel;
let Gambar = require('../../db/models').tbl_gambar;
class ArtikelDelete extends API{
    constructor(){
        super(Artikel)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

             //ambil gambar_idnya dari artikel
             let artikel = await Artikel.findOne({where: {id}, raw: true})

             let gambar_id = artikel.gambar_id
            
            //cari gambarnya lalu unlink
            let old_image = await Gambar.findOne({where:{id:gambar_id}, raw: true})
            let old_image_id = old_image.id
            let file_name = old_image.filename

            //hapus gambar dari foldernya
            await fs.unlinkSync(`${dir}/${file_name}`);
            
            //hapus gambar lalu hapus artikel
            let data = await Artikel.destroy({where:{id}})
            await Gambar.destroy({where:{id: old_image_id}})


            return res.status(200).json({
                status: 'success',
                message: 'artikel berhasil dihapus',
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

export default ArtikelDelete