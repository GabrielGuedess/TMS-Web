import { z } from 'zod';

export const signInFormSchema = z
  .object({
    email: z
      .string()
      .email('E-mail é invalido!')
      .trim()
      .min(1, 'E-mail é obrigatório!'),
    password: z
      .string()
      .trim()
      .min(1, 'Senha é obrigatório!')
      .min(8, 'Mínimo de 8 caracteres'),
  })
  .strict();
