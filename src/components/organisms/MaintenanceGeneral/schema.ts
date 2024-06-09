import { z } from 'zod';
import dayjs from 'dayjs';

const maintenanceCompany = z
  .object({
    id: z.string().min(1, 'Empresa de Manutenção é obrigatório!'),
    description: z.string().min(1, 'Empresa de Manutenção é obrigatório!'),
  })
  .strict();

const type = z
  .object({
    id: z.string().min(1, 'Tipo de Manutenção é obrigatório!'),
    description: z.string().min(1, 'Tipo de Manutenção é obrigatório!'),
  })
  .strict();

export const maintenanceGeneralSchema = z
  .object({
    type,
    maintenanceCompany,
    date_resolved: z.date().default(dayjs().toDate()),
  })
  .strict();
