import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
import {validationResult} from 'express-validator';
import path from 'path';
import fs from 'fs';
import sequelize from 'sequelize';
import reportError from '../../helper/error.helper';

const Artikel = require('../../db/models').tbl_artikel;
const Image = require('../../db/models').tbl_gambar
let dir = path.join(__dirname, '../../../uploads')

class ArtikelCreate extends API{
    constructor(){
        super(Artikel)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const t = await sequelize.Transaction;

            const id2 = uuidv4();

            if(!req.file){
                throw new Error('maaf gambar tidak boleh kosong')
            }

            let filename = req.file?.filename
            let original_name = req.file?.originalname
            let path = req.file?.path
            let mimetype = req.file?.mimetype

            let req_data:any = {  id: id2, filename, original_name, path, mimetype }

            let save_image = await Image.create(req_data)

            let gambar_id = save_image.dataValues.id;
            
            let { nama_artikel, deskripsi_artikel, kategori_id } = req.body

            const errors = validationResult(req);

            if (!errors.isEmpty()) {

                await fs.unlinkSync(`${dir}/${filename}`);

                return res.status(400).send({
                    status: "Error",
                    message: errors.array()
                });
            }

            const id = uuidv4();

            let request_data:any = {  id, nama_artikel, deskripsi_artikel, kategori_id, gambar_id }

            console.log(request_data);

            let data = await Artikel.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'artikel berhasil dibuat',
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

export default ArtikelCreate