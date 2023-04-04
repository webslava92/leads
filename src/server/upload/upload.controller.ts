import { Request, Response } from 'express';
import fs from 'fs';
import csvParser from 'csv-parser';
import {
  uploadFileService,
  createUploadService,
  getAllUploadsService,
} from './upload.service';

export async function uploadFileController(
  req: Request,
  res: Response,
) {
  if (req.file === undefined) {
    return res.send({
      success: false,
      message: 'You must select a file.',
    });
  }

  const file = req?.file?.originalname;
  const result: any[] = [];

  return fs
    .createReadStream(`public/static/${file}`)
    .pipe(csvParser())
    .on('data', (data) => result.push(data))
    .on('end', async () => {
      const parsedData = await uploadFileService(result);
      return res.json({ status: 200, data: parsedData });
    });
}

export async function createUploadController(
  req: Request,
  res: Response
) {
  const { numberOfEntries } = req.body;
  const upload = await createUploadService(numberOfEntries);
  return res.json({ status: 200, data: upload });
}

export async function getAllUploadsController(
  req: Request,
  res: Response
) {
  const uploads = await getAllUploadsService();
  return res.json({ status: 200, data: uploads });
}

