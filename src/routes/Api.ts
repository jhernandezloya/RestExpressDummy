/**
 * Define all your API web-routes
 *
 * @author Faiz A. Farooqui <faiz@geekyants.com>
 */

 //todo: aca se cargan todas las rutas para los APIS

import { Router } from 'express';

import Apiget from '../controllers/Api/Apiget';
import Apipost from '../controllers/Api/Apipost';

const router = Router();

router.get('/*', Apiget.perform);
router.post('/*', Apipost.perform);


export default router;
