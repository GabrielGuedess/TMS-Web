import { z } from 'zod';

const type = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

const brand = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

export const vehicleModelGeneralSchema = z
  .object({
    type,
    brand,
    name: z.string().min(1, 'Nome é obrigatório!'),
    axles: z.string().min(1, 'Eixos é obrigatório!'),
    weight: z.string().min(1, 'Peso é obrigatório!'),
    capacity_max: z.string().min(1, 'Capacidade Maxima é obrigatório!'),
    capacity_per_axle: z.string().min(1, 'Maxima por Eixo é obrigatório!'),
  })
  .strict();
