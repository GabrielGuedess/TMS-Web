import { z } from 'zod';

export const createVehicleBrandSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório!'),
  })
  .strict();
