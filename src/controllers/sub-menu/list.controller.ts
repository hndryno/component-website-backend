import API from '../../core/index.core';
import {Request, Response, NextFunction} from 'express';
import reportError from '../../helper/error.helper';

const SubMenu = require('../../db/models').tbl_submenu

class SubMenuList extends API{
    constructor(){
        super(SubMenu)
    }
    async exec(req: Request, res: Response, next: NextFunction){
        try{

            // let data = await SubMenu.findAll();

            let data = await SubMenu.findAll({
                include : [
                    { model : SubMenu, as:'tbl_submenus' }
                ],
            })

            return res.status(200).json({
                status: 'success',
                message: 'data berhasil ditampilkan',
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

export default SubMenuList;