import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

const SubMenu = require('../../db/models').tbl_submenu

class SubMenuUpdate extends API{
    constructor(){
        super(SubMenu)
    }

    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let { nama, menu_id, urutan, icon, url, target } = req.body

            let request_data:any = { nama, menu_id, urutan, icon, url, target }

            let data:any = await SubMenu.update(request_data,{where:{id}})

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

export default SubMenuUpdate