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
    rg: z.string(),
    cep: z.string(),
    cpf: z.string(),
    city: z.string(),
    name: z.string(),
    gender: z.string(),
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
    first_phone: z.string().min(11, 'No deve ter no mínimo 8 caracteres'),
  })
  .strict()
  .nullable()
  .optional();

const legalPersonManual = z
  .object({
    cep: z.string(),
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
    cnpj: z.string().transform(value => onlyNumbers(value)),
    first_phone: z.string().min(11, 'No deve ter no mínimo 8 caracteres'),
    state_registration: z.string().min(8, 'No deve ter no mínimo 8 caracteres'),
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

export const createSenderSchema = z
  .object({
    legalPerson,
    naturalPerson,
    legalPersonManual,
    naturalPersonManual,
    reference: z.enum(['manual', 'auto']).default('auto'),
    type: z.enum(['Física', 'Jurídica']).default('Física'),
  })
  .strict();
