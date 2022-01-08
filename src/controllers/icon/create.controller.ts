import API from '../../core/index.core';
import {IconInstance} from '../../models/icon';
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';

class CreateIcons extends API{
    constructor(){
        super(IconInstance)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{    
            const id = uuidv4();

            let { nama, tag } = req.body

            let path = req.file?.path

            let request_data:any = { id, nama, tag, path }

            let data_response = await IconInstance.create(request_data)

            return res.status(201).json({
                status: 'success',
                message: 'data berhasil dibuat',
                data: data_response
            })
        }catch(err:any){
            return res.status(400).json({
                status: 'error',
                message: err.message
            })
        }
    }
}

export default CreateIcons