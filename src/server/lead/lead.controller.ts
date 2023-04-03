import { Request, Response } from 'express';
import { createLeadService, getAllLeadsService } from './lead.service';

export const createLeadController = async (req: Request, res: Response) => {
  const { firstName, lastName, phone, email } = req.body;
  const lead = await createLeadService({
    firstName,
    lastName,
    phone,
    email,
  });
  return res.json(lead);
};

export const getAllLeadsController = async (req: Request, res: Response) => {
  const leads = await getAllLeadsService();
  return res.json(leads);
};
