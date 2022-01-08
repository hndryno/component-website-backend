import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

const SubMenu = require('../../db/models').tbl_submenu

class SubMenuDelete extends API{
    constructor(){
        super(SubMenu)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{
            const id = req.params.id

            let data = await SubMenu.destroy({where:{id}})

            if(data == 0){
                throw new Error("data tidak ditemukan")
            }

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

export default SubMenuDelete