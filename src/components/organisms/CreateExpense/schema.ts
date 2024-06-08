import { z } from 'zod';

const physicalCustomerOrder = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

const legalClientOrder = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

export const createExpenseSchema = z
  .object({
    legalClientOrder,
    physicalCustomerOrder,
    expenseName: z.string().min(1, 'Nome da Despesa é obrigatório!'),
    value: z.string().min(1, 'Valor da Despesa de Origem é obrigatório!'),
  })
  .strict();
