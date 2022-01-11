import API from '../../core/index.core';
const Information = require('../../db/models').tbl_information
import path from 'path';
import fs from 'fs';
import reportError from '../../helper/error.helper';
const Gambar = require('../../db/models').tbl_gambar
const Artikel = require('../../db/models').tbl_artikel
let dir = path.join(__dirname, '../../../uploads')

import {Request, Response, NextFunction} from 'express';

class InformationUpdate extends API{
    constructor(){
        super(Information)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            //ambil gambar_idnya dari artikel
            let information = await Information.findOne({where: {id}, raw: true})

            let gambar_id = information.gambar_id

             //kalau ada filenya update filenya
             if(req.file){
                console.log('filenya perlu diupdate')
                //ambil file lama based on id artikelnya
                let old_image = await Gambar.findOne({where:{id:gambar_id}, raw: true})
                let old_image_id = old_image.id
                let file_name = old_image.filename

                //hapus gambar dari foldernya
                await fs.unlinkSync(`${dir}/${file_name}`);
                //update file lamanya dengan file baru
                let filename = req.file?.filename
                let original_name = req.file?.originalname
                let path = req.file?.path
                let mimetype = req.file?.mimetype
                let request_data_gambar:any = { filename, original_name, path, mimetype }
                //update query
                await Gambar.update(request_data_gambar,{where:{id: old_image_id}})
            }

            let { nama_website, deskripsi, lokasi, facebook, twitter, instagram, tahun, copyright } = req.body

            let request_data:any = { id,  nama_website, deskripsi, lokasi, facebook, twitter, instagram, gambar_id, tahun, copyright }

            let data = await Information.update(request_data,{where:{id}})

            return res.status(201).json({
                status: 'success',
                message: 'data berhasil diupdate',
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

export default InformationUpdate