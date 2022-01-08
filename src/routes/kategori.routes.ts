import {Router, Request, Response, NextFunction} from 'express'

import KategoriCreate from '../controllers/kategory/create.controller';
import KategoriShow from '../controllers/kategory/show.controller';
import KategoriUpdate from '../controllers/kategory/update.controller';
import KategoriDelete from '../controllers/kategory/delete.controller';
import KategoriList from '../controllers/kategory/list.controller';

import kategoriValidation from '../validation/kategori.validation';

const router: Router = Router()

router.post('/', kategoriValidation.CreateKategoriValidation, async(req:Request, res: Response, next: NextFunction) => await new KategoriCreate().exec(req, res, next))

router.get('/', async(req:Request, res: Response, next: NextFunction) => await new KategoriList().exec(req, res, next))

router.get('/:id', async(req:Request, res: Response, next: NextFunction) => await new KategoriShow().exec(req, res, next))

router.patch('/:id', kategoriValidation.UpdateKategoriValidation, async(req:Request, res: Response, next: NextFunction) => await new KategoriUpdate().exec(req, res, next))

router.delete('/:id', async(req:Request, res: Response, next: NextFunction) => await new KategoriDelete().exec(req, res, next))

export default router;