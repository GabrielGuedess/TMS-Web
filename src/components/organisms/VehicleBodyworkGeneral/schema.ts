import { z } from 'zod';

export const vehicleBodyworkGeneralSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório!'),
    mass: z.string().min(1, 'Massa é obrigatório!'),
    axles: z.string().min(1, 'Eixos é obrigatório!'),
    volume: z.string().min(1, 'Volume é obrigatório!'),
  })
  .strict();
