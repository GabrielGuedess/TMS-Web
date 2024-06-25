import { z } from 'zod';

const carrier = z
  .object({
    id: z.string().min(1, 'Transportadora é obrigatório!'),
    description: z.string().min(1, 'Transportadora é obrigatório!'),
  })
  .strict();

const legalContract = z
  .object({
    id: z.string().min(1, 'Client Físico é obrigatório!'),
    description: z.string().min(1, 'Client Físico é obrigatório!'),
  })
  .strict();

const quoteTable = z
  .object({
    id: z.string().min(1, 'Cotação é obrigatório!'),
    description: z.string().min(1, 'Cotação é obrigatório!'),
  })
  .strict();

const expense = z
  .object({
    id: z.string(),
    value: z.string(),
    expenseName: z.string(),
  })
  .strict();

export const legalClientOrderGeneralSchema = z
  .object({
    carrier,
    quoteTable,
    legalContract,
    expenses: z.array(expense),
  })
  .strict();
