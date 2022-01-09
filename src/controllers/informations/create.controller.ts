import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
const Information = require('../../db/models').tbl_information
import {validationResult} from 'express-validator';
import reportError from '../../helper/error.helper';
import path from 'path';
import fs from 'fs';
const Image = require('../../db/models').tbl_gambar
let dir = path.join(__dirname, '../../../uploads')

class InformationCreate extends API{
    constructor(){
        super(Information)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{

            let information_length = await Information.findAll({},{raw: true} )

            if(information_length.length > 0){
                throw new Error('maaf hanya boleh menambahkan 1 informasi');
            }

            const id2 = uuidv4();

            let filename = req.file?.filename
            let original_name = req.file?.originalname
            let path = req.file?.path
            let mimetype = req.file?.mimetype

            let req_data:any = {  id: id2, filename, original_name, path, mimetype }

            let save_image = await Image.create(req_data)

            let gambar_id = save_image.dataValues.id;

            const id = uuidv4();

            let { nama_logo, nama_website, deskripsi, lokasi } = req.body

            const errors = validationResult(req);

            if (!errors.isEmpty()) {

                await fs.unlinkSync(`${dir}/${filename}`);

                return res.status(400).send({
                    status: "Error",
                    message: errors.array()
                });
            }

            let request_data:any = { id, nama_logo, nama_website, deskripsi, lokasi, gambar_id }

            let data = await Information.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'data berhasil dibuat',
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

export default InformationCreate