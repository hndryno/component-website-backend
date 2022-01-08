import {Router, Request, Response, NextFunction} from 'express'

import SubMenuCreate from '../controllers/sub-menu/create.controller';
import SubMenuList from '../controllers/sub-menu/list.controller';
import SubMenuShow from '../controllers/sub-menu/show.controller';
import SubMenuUpdate from '../controllers/sub-menu/update.controller';
import SubMenuDelete from '../controllers/sub-menu/delete.controller';

import subMenuValidation from '../validation/submenu.validation';

const router: Router = Router()

router.post('/', subMenuValidation.CreateSubMenuValidation, async(req:Request, res: Response, next: NextFunction) => await new SubMenuCreate().exec(req, res, next))

router.get('/', async(req:Request, res: Response, next: NextFunction) => await new SubMenuList().exec(req, res, next))

router.get('/:id', async(req:Request, res: Response, next: NextFunction) => await new SubMenuShow().exec(req, res, next))

router.patch('/:id', subMenuValidation.UpdateSubMenuValidation, async(req:Request, res: Response, next: NextFunction) => await new SubMenuUpdate().exec(req, res, next))

router.delete('/:id', async(req:Request, res: Response, next: NextFunction) => await new SubMenuDelete().exec(req, res, next))

export default router;