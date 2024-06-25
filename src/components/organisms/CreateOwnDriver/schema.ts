import { UfEnum } from 'graphql/generated';

import { z } from 'zod';
import dayjs from 'dayjs';

import { onlyNumbers } from 'functions/onlyNumbers';

const naturalPerson = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

const naturalPersonManual = z
  .object({
    city: z.string(),
    name: z.string(),
    nationality: z.string(),
    uf: z.nativeEnum(UfEnum),
    neighborhood: z.string(),
    public_place: z.string(),
    email: z.string().email(),
    address_number: z.string(),
    complement: z.string().optional().nullable(),
    third_phone: z.string().optional().nullable(),
    date_birth: z.date().default(dayjs().toDate()),
    second_phone: z.string().optional().nullable(),
    rg: z.string().transform(value => onlyNumbers(value)),
    cep: z.string().transform(value => onlyNumbers(value)),
    cpf: z.string().transform(value => onlyNumbers(value)),
    gender: z.enum(['Masculino', 'Feminino']).default('Masculino'),
    first_phone: z
      .string()
      .min(11, 'No deve ter no mínimo 8 caracteres')
      .transform(value => onlyNumbers(value)),
  })
  .strict()
  .nullable()
  .optional();

export const createOwnDriverSchema = z
  .object({
    naturalPerson,
    naturalPersonManual,
    cnh: z.string().min(1, 'CNH é obrigatório!'),
    cnh_expiration: z.date().default(dayjs().toDate()),
    reference: z.enum(['manual', 'auto']).default('auto'),
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
