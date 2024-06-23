import { TypesCteEnum } from 'graphql/generated';

import { z } from 'zod';

export const cteSchema = z
  .object({
    type: z.nativeEnum(TypesCteEnum),
    observations: z.string().min(1, 'Observação é obrigatório!'),
  })
  .strict();
