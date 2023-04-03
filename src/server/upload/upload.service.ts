import { UploadModel } from './upload.model';
import { DataType } from './types';

export const createUploadService = async ({ numberOfEntries }: DataType) => {
  const upload = await UploadModel.create({ numberOfEntries });
  upload.save();
  return upload;
};

export const getAllUploadsService = async () => {
  const uploads = await UploadModel.findAll();
  return uploads;
};
