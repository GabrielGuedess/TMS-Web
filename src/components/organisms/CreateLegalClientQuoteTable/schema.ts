import {
  UfEnum,
  WhoIsPay,
  FormPayment,
  TypeMerchandise,
  KindOfServicerOrder,
} from 'graphql/generated';

import { z } from 'zod';

const sender = z
  .object({
    id: z.string().min(1, 'Pessoa Física é obrigatório!'),
    description: z.string().min(1, 'Pessoa Física é obrigatório!'),
  })
  .strict();

const recipient = z
  .object({
    id: z.string().min(1, 'Pessoa Física é obrigatório!'),
    description: z.string().min(1, 'Pessoa Física é obrigatório!'),
  })
  .strict();

const address = z
  .object({
    uf: z.nativeEnum(UfEnum),
    complement: z.string().optional(),
    street: z.string().min(1, 'Rua é obrigatório!'),
    city: z.string().min(1, 'Cidade é obrigatório!'),
    postalCod: z.string().min(1, 'CEP é obrigatório!'),
    neighborhood: z.string().min(1, 'Bairro é obrigatório!'),
    address_number: z.string().min(1, 'Numero é obrigatório!'),
  })
  .strict();

export const createLegalClientQuoteTableSchema = z
  .object({
    sender,
    recipient,
    adressOrigin: address,
    adressDestiny: address,
    who_pays: z.nativeEnum(WhoIsPay),
    formPayment: z.nativeEnum(FormPayment),
    kindService: z.nativeEnum(KindOfServicerOrder),
    typeMerchandise: z.nativeEnum(TypeMerchandise),
    mass: z.number().min(1, 'Massa é obrigatório!'),
    amount: z.number().min(1, 'Valor é obrigatório!'),
    volume: z.number().min(1, 'Volume é obrigatório!'),
    description: z.string().min(1, 'Descrição é obrigatório!'),
    nf_value: z.number().min(1, 'Valor da Nota Fiscal é obrigatório!'),
    nf_serie: z.string().min(1, 'Serie da Nota Fiscal  é obrigatório!'),
    nf_number: z.string().min(1, 'Numero da Nota Fiscal é obrigatório!'),
  })
  .strict();
