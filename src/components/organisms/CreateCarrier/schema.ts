import { UfEnum } from 'graphql/generated';

import { z } from 'zod';

import { onlyNumbers } from 'functions/onlyNumbers';

const legalPersonManual = z
  .object({
    city: z.string(),
    fantasy_name: z.string(),
    uf: z.nativeEnum(UfEnum),
    neighborhood: z.string(),
    public_place: z.string(),
    email: z.string().email(),
    corporate_name: z.string(),
    address_number: z.string(),
    complement: z.string().optional().nullable(),
    third_phone: z.string().optional().nullable(),
    second_phone: z.string().optional().nullable(),
    cep: z.string().transform(value => onlyNumbers(value)),
    cnpj: z.string().transform(value => onlyNumbers(value)),
    state_registration: z.string().min(8, 'No deve ter no mínimo 8 caracteres'),
    first_phone: z
      .string()
      .min(11, 'No deve ter no mínimo 8 caracteres')
      .transform(value => onlyNumbers(value)),
  })
  .strict()
  .nullable()
  .optional();

const legalPerson = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

export const createCarrierSchema = z
  .object({
    legalPerson,
    legalPersonManual,
    reference: z.enum(['manual', 'auto']).default('auto'),
    rntrc: z
      .string()
      .trim()
      .min(1, 'RNTRC é obrigatório!')
      .min(13, 'RNTRC deve ter 13 caracteres!')
      .max(13, 'RNTRC deve ter 13 caracteres!'),
  })
  .strict();
