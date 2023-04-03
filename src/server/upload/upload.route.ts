import { Router } from 'express';
import {
  createUploadController,
  getAllUploadsController,
} from './upload.controller';

export const uploadRoute = () => {
  const router = Router();

  router.post('/', createUploadController);
  router.get('/', getAllUploadsController);
  // router.get('/:id', LeadController.getOne);
  return router;
};
