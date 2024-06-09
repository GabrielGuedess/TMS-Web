import { z } from 'zod';

const vehicle = z
  .object({
    id: z.string().min(1, 'Veiculo é obrigatório!'),
    description: z.string().min(1, 'Veiculo é obrigatório!'),
  })
  .strict();

const carrierCompany = z
  .object({
    id: z.string().min(1, 'Transportadora é obrigatório!'),
    description: z.string().min(1, 'Transportadora é obrigatório!'),
  })
  .strict();

export const createCompanyVehicleSchema = z
  .object({
    vehicle,
    carrierCompany,
  })
  .strict();
