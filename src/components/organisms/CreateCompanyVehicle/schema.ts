import { z } from 'zod';
import dayjs from 'dayjs';

const vehicle = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

const model = z
  .object({
    id: z.string().min(1, 'Modelo é obrigatório!'),
    description: z.string().min(1, 'Modelo é obrigatório!'),
  })
  .strict();

const carrierCompany = z
  .object({
    id: z.string().min(1, 'Transportadora é obrigatório!'),
    description: z.string().min(1, 'Transportadora é obrigatório!'),
  })
  .strict();

const vehicleManual = z
  .object({
    model,
    antt: z.string(),
    color: z.string(),
    year: z.string().max(4, 'Coloque o ano valido'),
    registration: z.date().default(dayjs().toDate()),
    plate: z.string().max(8, 'Deve ter no máximo 8 caracteres'),
    renavam: z.string().max(11, 'Deve ter no máximo 11 caracteres'),
    isIpvaPaid: z
      .enum(['Sim', 'Não'])
      .default('Não')
      .transform(value => value === 'Sim'),
  })
  .strict()
  .nullable()
  .optional();

export const createCompanyVehicleSchema = z
  .object({
    vehicle,
    vehicleManual,
    carrierCompany,
    reference: z.enum(['manual', 'auto']).default('auto'),
  })
  .strict();
