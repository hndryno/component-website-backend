import API from '../../core/index.core';
const Menu = require('../../db/models').tbl_menu
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
import {validationResult} from 'express-validator';
import reportError from '../../helper/error.helper';

class MenuCreate extends API{
    constructor(){
        super(Menu)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{

            const id = uuidv4();

            let { nama, link, icon } = req.body

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).send({
                    status: "Error",
                    message: errors.array()
                });
            }

            let request_data:any = { id, nama, link, icon }

            let data = await Menu.create(request_data);

            return res.status(201).json({
                status: 'success',
                message: 'header berhasil dibuat',
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

export default MenuCreate