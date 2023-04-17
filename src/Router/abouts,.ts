import { Router } from 'express';
import AboutController from '../Controllers/about_contrllers';

const router = Router();
router.get('/', AboutController.index);
export default router;
