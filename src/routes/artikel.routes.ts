import {Router, Request, Response, NextFunction} from 'express'
import multer from 'multer';

import ArtikelCreate from '../controllers/artikel/create.controller';
import ArtikelShow from '../controllers/artikel/show.controller';
import ArtikelUpdate from '../controllers/artikel/update.controller';
import ArtikelDelete from '../controllers/artikel/delete.controller';
import ArtikelList from '../controllers/artikel/list.controller';
import ArtikelValidation from '../validation/artikel.validation'
import multerSettings from '../libs/multer';

const upload = multer(multerSettings);
const router: Router = Router()

router.post('/', upload.single('image'), ArtikelValidation.CreateArtikelValidation,  async(req:Request, res: Response, next: NextFunction) => await new ArtikelCreate().exec(req, res, next))

router.get('/', async(req:Request, res: Response, next: NextFunction) => await new ArtikelList().exec(req, res, next))

router.get('/:id', async(req:Request, res: Response, next: NextFunction) => await new ArtikelShow().exec(req, res, next))

router.patch('/:id', upload.single('image'), async(req:Request, res: Response, next: NextFunction) => await new ArtikelUpdate().exec(req, res, next))

router.delete('/:id', async(req:Request, res: Response, next: NextFunction) => await new ArtikelDelete().exec(req, res, next))

export default router;