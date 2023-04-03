import { Router } from 'express';
import { leadRoute } from './lead/lead.route';
import { uploadRoute } from './upload/upload.route';

const router = Router();

router.post('/leads', leadRoute());
router.get('/uploads', uploadRoute());

export default router;
