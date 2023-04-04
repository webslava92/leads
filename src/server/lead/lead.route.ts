import { Router } from 'express';
import { createLeadController, getAllLeadsController } from './lead.controller';

export const leadRoute = () => {
  const router = Router();

  router.post('/', createLeadController);
  router.get('/', getAllLeadsController);
  // router.get('/:id', LeadController.getOne);
  // router.put('/:id', LeadController.edit);
  // router.delete('/:id', LeadController.delete);
  return router;
};
