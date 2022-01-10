import {Router, Request, Response, NextFunction} from 'express'
import multer from 'multer';

import InformationCreate from '../controllers/informations/create.controller';
import InformationShow from '../controllers/informations/show.controller';
import InformationUpdate from '../controllers/informations/update.controller';
import InformationDelete from '../controllers/informations/delete.controller';
import InformationList from '../controllers/informations/list.controller';

import multerSettings from '../libs/multer';

const upload = multer(multerSettings);
const router: Router = Router()

router.post('/', upload.single('image'), async(req:Request, res: Response, next: NextFunction) => await new InformationCreate().exec(req, res, next))

router.get('/', upload.single('image'), async(req:Request, res: Response, next: NextFunction) => await new InformationList().exec(req, res, next))

router.get('/:id', async(req:Request, res: Response, next: NextFunction) => await new InformationShow().exec(req, res, next))

router.patch('/:id', upload.single('image'), async(req:Request, res: Response, next: NextFunction) => await new InformationUpdate().exec(req, res, next))

router.delete('/:id', async(req:Request, res: Response, next: NextFunction) => await new InformationDelete().exec(req, res, next))

export default router;