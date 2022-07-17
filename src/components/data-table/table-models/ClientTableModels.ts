import { IClient } from 'models';

export interface IClientColumns {
  id: 'name' | 'phone' | 'email' | 'city';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center' | 'left';
}

export const ClientColumns: readonly IClientColumns[] = [
  {
    id: 'name',
    label: 'Nome',
    minWidth: 130,
    align: 'left',
  },
  {
    id: 'phone',
    label: 'Telefone',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'email',
    label: 'E-mail',
    minWidth: 190,
    align: 'left',
  },
  {
    id: 'city',
    label: 'Cidade',
    minWidth: 150,
    align: 'left',
  },
];

export interface IClientRows {
  name: string;
  phone: string;
  email?: string;
  city?: string;
}

export const createClientData = (client: IClient): IClientRows => {
  const name = client.name;
  const phone = client.phone;
  const email = client.email;
  const city = client.address?.city;
  return { name, phone, email, city };
};
