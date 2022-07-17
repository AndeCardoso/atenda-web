import { IServiceOrder } from 'models';

export interface IServiceOrderColumns {
  id: 'id' | 'client' | 'model' | 'device' | 'reportedIssues' | 'createdAt' | 'status';
  label: string;
  minWidth?: number;
  align: 'left' | 'center' | 'right';
  format?: (value: Date) => string;
}

export const ServiceOrderColumns: readonly IServiceOrderColumns[] = [
  { id: 'id', label: 'ID', minWidth: 40, align: 'center' },
  { id: 'client', label: 'Cliente', minWidth: 170, align: 'left' },
  {
    id: 'device',
    label: 'Dispositivo',
    minWidth: 120,
    align: 'left',
  },
  {
    id: 'model',
    label: 'Modelo',
    minWidth: 150,
    align: 'left',
  },
  {
    id: 'reportedIssues',
    label: 'Problemas',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'createdAt',
    label: 'Data',
    minWidth: 100,
    align: 'left',
    format: (value: Date) => value.toLocaleDateString('pt-BR'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'center',
  },
];

export interface IServiceOrderRows {
  id: number;
  client: string;
  deviceType: string;
  deviceModel: string;
  reportedIssues: string;
  createdAt: string;
  status: string;
}

export const createServiceOrderData = (serviceOrder: IServiceOrder): IServiceOrderRows => {
  const id = serviceOrder.idOs;
  const client = serviceOrder.client.name;
  const deviceType = serviceOrder.device.typeEquip;
  const deviceModel = serviceOrder.device.model;
  const reportedIssues = serviceOrder.reportedIssues;
  const createdAt = serviceOrder.createdAt;
  const status = serviceOrder.status;
  return { id, client, deviceModel, deviceType, reportedIssues, createdAt, status };
};
