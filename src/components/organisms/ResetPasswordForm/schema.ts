import { z } from 'zod';

export const resetPasswordFormSchema = z
  .object({
    code: z.string().min(6, 'Código deve ter 6 números!'),
    password: z
      .string()
      .min(1, 'Senha é obrigatório!')
      .min(8, 'Mínimo de 8 caracteres'),
    email: z
      .string()
      .trim()
      .email('E-mail inválido')
      .min(1, 'E-mail é obrigatório!'),
    confirm_password: z
      .string()
      .min(1, 'Confirme sua senha é obrigatório!')
      .min(8, 'Mínimo de 8 caracteres'),
  })
  .strict()
  .refine(
    ({ password, confirm_password: confirmPassword }) =>
      password === confirmPassword,
    {
      path: ['confirm_password'],
      message: 'As senhas não correspondem',
    },
  );
