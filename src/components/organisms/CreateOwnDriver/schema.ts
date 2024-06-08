import { z } from 'zod';
import dayjs from 'dayjs';

const naturalPerson = z
  .object({
    id: z.string().min(1, 'Pessoa Física é obrigatório!'),
    description: z.string().min(1, 'Pessoa Física é obrigatório!'),
  })
  .strict();

export const createOwnDriverSchema = z
  .object({
    naturalPerson,
    cnh: z.string().min(1, 'CNH é obrigatório!'),
    cnh_expiration: z.date().default(dayjs().toDate()),
    cnh_category: z.string().min(1, 'Categoria da CNH é obrigatório!'),
    course_mopp: z
      .enum(['Sim', 'Não'])
      .default('Não')
      .transform(value => value === 'Sim'),
    company_vehicle: z
      .enum(['Sim', 'Não'])
      .default('Não')
      .transform(value => value === 'Sim'),
  })
  .strict();
