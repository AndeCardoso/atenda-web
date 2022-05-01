export interface ITechnicianForm {
  code: number;
  cpf?: string;
  name: string;
  phone: string;
  email?: string;
  address: IAddress;
  duty: Duty;
  externService?: boolean;
}

interface IAddress {
  street?: string;
  number?: number;
  city?: string;
  district?: string;
  state?: string;
  cep?: string;
}

export type Duty = [
  'desktop',
  'notebook',
  'celular',
  'tablet'
]