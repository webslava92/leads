import { createUploadService, getAllUploadsService } from './upload.service';
import { DataType } from './types';

export const createUploadController = async ({ numberOfEntries }: DataType) => {
  const upload = await createUploadService({ numberOfEntries });
  upload.save();
  return upload;
};

export const getAllUploadsController = async () => {
  const uploads = await getAllUploadsService();
  return uploads;
};
