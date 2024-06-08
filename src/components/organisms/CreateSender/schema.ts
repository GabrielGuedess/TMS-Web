import { z } from 'zod';

const naturalPerson = z
  .object({
    id: z.string(),
    description: z.string(),
  })
  .strict();

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
  })
  .strict();
