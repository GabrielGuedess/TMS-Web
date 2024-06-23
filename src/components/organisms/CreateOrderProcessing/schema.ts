import { StatusOrder } from 'graphql/generated';

import { z } from 'zod';
import dayjs from 'dayjs';

const driver = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

const vehicle = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

const legalCustomerOrder = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

const physicalCustomerOrder = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

export const createOrderProcessingSchema = z
  .object({
    driver,
    vehicle,
    status: z.nativeEnum(StatusOrder),
    end_at: z.date().default(dayjs().toDate()),
    start_at: z.date().default(dayjs().toDate()),
    legalCustomerOrder: z.array(legalCustomerOrder),
    physicalCustomerOrder: z.array(physicalCustomerOrder),
    total_distance: z.string().min(1, 'Distancia Total é obrigatório!'),
    total_spending_money: z.string().min(1, 'Total de Gastos é obrigatório!'),
    total_spend_liters: z
      .string()
      .min(1, 'Total de Litros Gastos é obrigatório!'),
  })
  .strict();
