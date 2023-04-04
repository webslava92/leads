import { UploadModel } from './upload.model';
import { LeadModel } from '../lead/lead.model';
import { DataType } from './types';

export const uploadFileService = async (result: DataType[]) => {
  const numberOfEntries = result.length;

  const uploadInfo = await UploadModel.create({ numberOfEntries });

  const preparedData = result.map((item) => ({
    firstName: item.firstName,
    lastName: item.lastName,
    phone: item.phone,
    email: item.email,
    uploadId: uploadInfo.id,
  }));

  const uploads = await LeadModel.bulkCreate(preparedData);

  return uploads;
};

export const createUploadService = async (numberOfEntries: number) => {
  const upload = await UploadModel.create({ numberOfEntries });
  upload.save();
  return upload;
};

export const getAllUploadsService = async () => {
  const uploads = await UploadModel.findAll();
  return uploads;
};

