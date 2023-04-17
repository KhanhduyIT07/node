import { Router } from 'express';
import UserController from '../Controllers/index_controllers';

const router = Router();
router.get('/', UserController.index);
export default router;
