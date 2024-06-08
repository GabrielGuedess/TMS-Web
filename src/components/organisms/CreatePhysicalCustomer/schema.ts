import { z } from 'zod';

const naturalPerson = z
  .object({
    id: z.string().min(1, 'Pessoa Físico é obrigatório!'),
    description: z.string().min(1, 'Pessoa Físico é obrigatório!'),
  })
  .strict();

export const createPhysicalCustomerSchema = z
  .object({
    naturalPerson,
    branch: z.string().trim().min(1, 'Ramo é obrigatório!'),
  })
  .strict();
