import { z } from 'zod';

const legalPerson = z
  .object({
    id: z.string().min(1, 'Pessoa Jurídica é obrigatório!'),
    description: z.string().min(1, 'Pessoa Jurídica é obrigatório!'),
  })
  .strict();

export const maintenanceCompanyGeneralSchema = z
  .object({
    legalPerson,
    specialty_maintenance: z
      .string()
      .min(1, 'Manutenção Especializada é obrigatório!'),
  })
  .strict();
