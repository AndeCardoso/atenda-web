import { IClient, IServiceOrder } from 'models';

export const clients: IClient[] = [
  {
    cpf: '014.956.940-89',
    name: 'Anderson Monteiro Cardoso',
    phone: '(51) 99724-5468',
    email: 'andersoncardoso@gmail.com',
    address: {
      city: 'Capão da Canoa',
    },
  },
  {
    cpf: '559.118.865-61',
    name: 'Fabi',
    phone: '(51) 99878-5708',
    email: 'fabi.contato@gmail.com',
    address: {
      city: 'Caxias do Sul',
    },
  },
  {
    cpf: '994.325.884-59',
    name: 'Milton Cesar Magnus Cardoso',
    phone: '(51) 98567-5348',
    email: 'centralpesca@gmail.com',
    address: {
      city: 'Xangri-lá',
    },
  },
  {
    cpf: '567.386.222-95',
    name: 'Loeci',
    phone: '(51) 97144-8768',
    email: 'loeci.monteiro@gmail.com',
    address: {
      city: 'Capão da Canoa',
    },
  },
];

export const serviceOrders: IServiceOrder[] = [
  {
    idOs: 95,
    client: {
      cpf: '994.325.884-59',
      name: 'Milton',
      phone: '(51) 98567-5348',
      email: 'centralpesca@gmail.com',
    },
    device: {
      client: {
        cpf: '994.325.884-59',
        name: 'Milton',
        phone: '(51) 98567-5348',
        email: 'centralpesca@gmail.com',
      },
      typeEquip: 'celular',
      serialNumber: '12354gfh12-edgr12',
      brand: 'Motorola',
      model: 'Z3',
    },
    status: 'Diagnóstico',
    reportedIssues: 'Não liga',
    findedIssues: 'Bateria estufada',
    performedServices: 'Cliente avisado',
    hasParts: false,
    technician: {
      code: 2,
      name: 'Anderson',
      phone: '(51) 99724-5468',
      externService: true,
    },
    createdAt: '2020-06-13T18:30:00.000Z',
  },
  {
    idOs: 108,
    client: {
      cpf: '567.386.222-95',
      name: 'Loeci',
      phone: '(51) 97144-8768',
      email: 'loeci.monteiro@gmail.com',
    },
    device: {
      client: {
        cpf: '567.386.222-95',
        name: 'Loeci',
        phone: '(51) 97144-8768',
        email: 'loeci.monteiro@gmail.com',
      },
      typeEquip: 'notebook',
      serialNumber: 'a12b65d-bra1',
      brand: 'Samsung',
      model: 'Book',
    },
    status: 'Fila',
    reportedIssues: 'Tela piscando',
    findedIssues: 'Cabo flat parcialmente rompido',
    performedServices: 'Aberto para análise',
    hasParts: false,
    technician: {
      code: 2,
      name: 'Anderson',
      phone: '(51) 99724-5468',
      externService: true,
    },
    createdAt: '2020-06-13T18:30:00.000Z',
  },
];
