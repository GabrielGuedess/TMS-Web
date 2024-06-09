import { z } from 'zod';
import dayjs from 'dayjs';

export const ICMSGeneralSchema = z
  .object({
    effective_date: z.date().default(dayjs().toDate()),
    aliquot: z.string().min(1, 'Alíquota é obrigatório!'),
    state_origin: z.string().min(1, 'Estado de Origem é obrigatório!'),
    recipient_state: z.string().min(1, 'Estado Recebedor é obrigatório!'),
  })
  .strict();
