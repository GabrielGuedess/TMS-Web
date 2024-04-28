import { z } from 'zod';

export const userGeneral = z
  .object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    role: z.enum(['ADMIN', 'USER']),
  })
  .strict();
