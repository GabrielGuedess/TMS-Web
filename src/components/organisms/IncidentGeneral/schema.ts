import { z } from 'zod';
import dayjs from 'dayjs';

const orderProcess = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

export const incidentGeneralSchema = z
  .object({
    orderProcess,
    date_incident: z.date().default(dayjs().toDate()),
    date_resolved: z.date().default(dayjs().toDate()),
    description: z.string().min(1, 'Descrição é obrigatório!'),
  })
  .strict();
