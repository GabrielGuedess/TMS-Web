import { z } from 'zod';
import dayjs from 'dayjs';

const carrierCompany = z
  .object({
    id: z.string().min(1, 'Transportadora é obrigatório!'),
    description: z.string().min(1, 'Transportadora é obrigatório!'),
  })
  .strict();

const legalClient = z
  .object({
    id: z.string().min(1, 'Cliente Jurídico é obrigatório!'),
    description: z.string().min(1, 'Cliente Jurídico é obrigatório!'),
  })
  .strict();

export const createContractSchema = z
  .object({
    legalClient,
    carrierCompany,
    effective_date: z.date().default(dayjs().toDate()),
    observations: z.string().trim().min(1, 'Observação é obrigatório!'),
    delivery_conditions: z
      .string()
      .trim()
      .min(1, 'Condições de Entrega é obrigatório!'),
  })
  .strict();
