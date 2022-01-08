import {Router, Request, Response, NextFunction} from 'express'

import ArtikelImageCreate from '../controllers/article-image/create.controller';
import ArtikelImageList from '../controllers/article-image/list.controller';
import ArtikelView from '../controllers/article-image/view.controller'
import ArtikelImageDelete from '../controllers/article-image/delete.controller'
import multer from 'multer';

import multerSettings from '../libs/multer';
const upload = multer(multerSettings);

const router: Router = Router()

router.post('/', upload.single('image'), async(req:Request, res: Response, next: NextFunction) => await new ArtikelImageCreate().exec(req, res, next))

router.get('/', async(req:Request, res: Response, next: NextFunction) => await new ArtikelImageList().exec(req, res, next))

router.get('/show/:id', async(req:Request, res: Response, next: NextFunction) => await new ArtikelView().exec(req, res, next))

router.delete('/delete/:id', async(req:Request, res: Response, next: NextFunction) => await new ArtikelImageDelete().exec(req, res, next))

export default router;