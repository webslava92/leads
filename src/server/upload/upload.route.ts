import { Router } from 'express';
import {
  createUploadController,
  getAllUploadsController,
  uploadFileController,
} from './upload.controller';
import { upload } from './filePrepareMiddleware';

export const uploadRoute = () => {
  const router = Router();

  router.post('/file', upload.single('file'), uploadFileController);
  router.post('/', createUploadController);
  router.get('/', getAllUploadsController);
  // router.get('/:id', LeadController.getOne);
  return router;
};
