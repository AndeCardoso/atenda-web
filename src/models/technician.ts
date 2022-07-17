import { IAddress } from './client';
import { typeEquip } from './device';

export interface ITechnician {
  code: number;
  cpf?: string;
  name: string;
  phone: string;
  email?: string;
  address?: IAddress;
  duty?: typeEquip;
  externService: boolean;
}
