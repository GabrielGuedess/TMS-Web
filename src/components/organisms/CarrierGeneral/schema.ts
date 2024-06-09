import { z } from 'zod';

const legalPerson = z
  .object({
    id: z.string().min(1, 'Pessoa Jurídica é obrigatório!'),
    description: z.string().min(1, 'Pessoa Jurídica é obrigatório!'),
  })
  .strict();

export const carrierGeneralSchema = z
  .object({
    legalPerson,
    rntrc: z.string().trim().min(1, 'RNTRC é obrigatório!'),
  })
  .strict();
