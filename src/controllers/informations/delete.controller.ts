import API from '../../core/index.core';

import path from 'path';
import fs from 'fs';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

const Information = require('../../db/models').tbl_information
const Gambar = require('../../db/models').tbl_gambar
let dir = path.join(__dirname, '../../../uploads')

class InformationDelete extends API{
    constructor(){
        super(Information)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let information = await Information.findOne({where: {id}, raw: true})

            let gambar_id = information.gambar_id

            let old_image = await Gambar.findOne({where:{id:gambar_id}, raw: true})
            //unlink gambarnya
            let file_name = old_image.filename
            await fs.unlinkSync(`${dir}/${file_name}`);
            //hapus data gambarnya
            await Gambar.destroy({where:{id: gambar_id}})

            //hapus datanya
            let data = await Information.destroy({where:{id}})

            return res.status(200).json({
                status: 'success',
                message: 'data berhasil dihapus',
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

export default InformationDelete