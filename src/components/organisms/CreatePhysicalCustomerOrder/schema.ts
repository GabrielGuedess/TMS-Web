import { z } from 'zod';

const carrier = z
  .object({
    id: z.string().min(1, 'Transportadora é obrigatório!'),
    description: z.string().min(1, 'Transportadora é obrigatório!'),
  })
  .strict();

const physicalCustomer = z
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
    value: z.string().min(1, 'Despesa é obrigatório!'),
    expenseName: z.string().min(1, 'Despesa é obrigatório!'),
  })
  .strict();

export const createPhysicalCustomerOrderSchema = z
  .object({
    carrier,
    quoteTable,
    physicalCustomer,
    expenses: z.array(expense),
  })
  .strict();
