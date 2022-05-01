export interface IClientForm {
  cpf?: string;
  name: string;
  phone: string;
  email?: string;
  address?: IAddress;
}

interface IAddress {
  street?: string;
  number?: number;
  city?: string;
  district?: string;
  state?: string;
  cep?: string;
}