import {Router, Request, Response, NextFunction} from 'express'

import MenuCreate from '../controllers/menu/create.controller';
import MenuList from '../controllers/menu/list.controller';
import MenuShow from '../controllers/menu/show.controller';
import MenuUpdate from '../controllers/menu/update.controller';
import MenuDelete from '../controllers/menu/delete.controller';

import menuValidation from '../validation/menu.validation';

const router: Router = Router()

router.post('/', menuValidation.CreateCsValidation, async(req:Request, res: Response, next: NextFunction) => await new MenuCreate().exec(req, res, next))

router.get('/', async(req:Request, res: Response, next: NextFunction) => await new MenuList().exec(req, res, next))

router.get('/:id', async(req:Request, res: Response, next: NextFunction) => await new MenuShow().exec(req, res, next))

router.patch('/:id', menuValidation.UpdateCsValidation, async(req:Request, res: Response, next: NextFunction) => await new MenuUpdate().exec(req, res, next))

router.delete('/:id', async(req:Request, res: Response, next: NextFunction) => await new MenuDelete().exec(req, res, next))

export default router;