export interface IClient {
  cpf?: string;
  name: string;
  phone: string;
  email?: string;
  address?: IAddress;
}

export interface IAddress {
  street?: string;
  number?: number;
  city?: string;
  district?: string;
  state?: string;
  cep?: string;
}
