import { Sequelize } from 'sequelize-typescript';
import { LeadModel } from '../lead/lead.model';
import { UploadModel } from '../upload/upload.model';

export const sequelize = new Sequelize({
  repositoryMode: true,
  database: 'leads',
  dialect: 'sqlite',
  storage: 'src/server/db.db',
  models: [LeadModel, UploadModel],
});
