import { z } from 'zod';

const legalPerson = z
  .object({
    id: z.string().min(1, 'Pessoa Jurídico é obrigatório!'),
    description: z.string().min(1, 'Pessoa Jurídico é obrigatório!'),
  })
  .strict();

export const createLegalClientSchema = z
  .object({
    legalPerson,
    branch: z.string().trim().min(1, 'Ramo é obrigatório!'),
  })
  .strict();
