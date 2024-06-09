import { z } from 'zod';

const vehicle = z
  .object({
    id: z.string().min(1, 'Veiculo é obrigatório!'),
    description: z.string().min(1, 'Veiculo é obrigatório!'),
  })
  .strict();

const maintenanceCompany = z
  .object({
    id: z.string().min(1, 'Empresa de Manutenção é obrigatório!'),
    description: z.string().min(1, 'Empresa de Manutenção é obrigatório!'),
  })
  .strict();

const type = z
  .object({
    id: z.string().min(1, 'Tipo de Manutenção é obrigatório!'),
    description: z.string().min(1, 'Tipo de Manutenção é obrigatório!'),
  })
  .strict();

export const createMaintenanceSchema = z
  .object({
    type,
    vehicle,
    maintenanceCompany,
  })
  .strict();
