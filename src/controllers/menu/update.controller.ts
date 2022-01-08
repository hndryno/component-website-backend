import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import {validationResult} from 'express-validator';
import reportError from '../../helper/error.helper';

const Menu = require('../../db/models').tbl_menu

class MenuUpdate extends API{
    constructor(){
        super(Menu)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let { nama, urutan, icon } = req.body

            let request_data:any = { nama, urutan, icon }

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).send({
                    status: "Error",
                    message: errors.array()
                });
            }


            let data:any = await Menu.update(request_data,{where:{id}})

            if(data == 0){
                throw new Error("data tidak ditemukan")
            }

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

export default MenuUpdate