import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
import reportError from '../../helper/error.helper';

const SubMenu = require('../../db/models').tbl_submenu

class SubMenuCreate extends API{
    constructor(){
        super(SubMenu)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = uuidv4();

            let { menu_id, nama, urutan, icon, url, target, submenu_id } = req.body

            let request_data:any = { id, nama, menu_id, urutan, icon, url, target, submenu_id }

            let data = await SubMenu.create(request_data)

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

export default SubMenuCreate;