import { LeadModel } from './lead.model';
import { DataType } from './types';

export const createLeadService = async ({ firstName, lastName, phone, email }: DataType) => {
  const candidate = await LeadModel.findOne({ where: { phone, email } });
  if (candidate) {
    return {
      status: 400,
      message: `Lead with ${phone || email} already exists`,
    };
  }
  const lead = await LeadModel.create({
    firstName,
    lastName,
    phone,
    email,
  });
  lead.save();
  return lead;
};

export const getAllLeadsService = async () => {
  const leads = await LeadModel.findAll();
  return leads;
};
