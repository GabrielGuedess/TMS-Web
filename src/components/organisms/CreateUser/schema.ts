import { z } from 'zod';

export const createUserSchema = z
  .object({
    role: z.enum(['USER', 'ADMIN']).default('USER'),
    name: z.string().trim().min(1, 'Nome é obrigatório!'),
    email: z.string().trim().min(1, 'E-mail é obrigatório!'),
    password: z.string().trim().min(1, 'Senha é obrigatório!'),
    username: z.string().trim().min(1, 'Username é obrigatório!'),
  })
  .strict();
