import { Request, Response } from 'express';
import { createLeadService, getAllLeadsService } from './lead.service';

export async function createLeadController(req: Request, res: Response) {
  const { firstName, lastName, phone, email } = req.body;
  const lead = await createLeadService({
    firstName,
    lastName,
    phone,
    email,
  });
  return res.json({ status: 200, data: lead });
}

export async function getAllLeadsController(req: Request, res: Response) {
  const leads = await getAllLeadsService();
  return res.json({ status: 200, data: leads });
}
