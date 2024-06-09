import { z } from 'zod';

const bodyWorkEntity = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

export const vehicleTypeGeneralSchema = z
  .object({
    bodyWorkEntity,
    name: z.string().min(1, 'Carroceria é obrigatório!'),
    bodyWork: z
      .enum(['Sim', 'Não'])
      .default('Não')
      .transform(value => value === 'Sim'),
  })
  .strict();
