import { Router } from 'express';
import { leadRoute } from './lead/lead.route';
import { uploadRoute } from './upload/upload.route';

const router = Router();

router.use('/leads', leadRoute());
router.use('/uploads', uploadRoute());

export default router;
