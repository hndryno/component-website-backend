import {Router, Request, Response, NextFunction} from 'express'

import HeaderCreate from '../controllers/informations/create.controller';
import HeaderShow from '../controllers/informations/show.controller';
import HeaderUpdate from '../controllers/informations/update.controller';
import HeaderDelete from '../controllers/informations/delete.controller';

const router: Router = Router()

router.post('/', async(req:Request, res: Response, next: NextFunction) => await new HeaderCreate().exec(req, res, next))

router.get('/:id', async(req:Request, res: Response, next: NextFunction) => await new HeaderShow().exec(req, res, next))

router.put('/:id', async(req:Request, res: Response, next: NextFunction) => await new HeaderUpdate().exec(req, res, next))

router.delete('/:id', async(req:Request, res: Response, next: NextFunction) => await new HeaderDelete().exec(req, res, next))

export default router;