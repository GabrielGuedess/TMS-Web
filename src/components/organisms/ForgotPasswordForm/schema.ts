import { z } from 'zod';

export const forgotPasswordFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email('E-mail inválido')
      .min(1, 'E-mail é obrigatório!'),
  })
  .strict();
