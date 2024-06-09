import { z } from 'zod';

export const vehicleBrandGeneralSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório!'),
  })
  .strict();
