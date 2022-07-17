import { IClient } from './client';
import { IDevice } from './device';
import { ITechnician } from './technician';

export interface IServiceOrder {
  idOs: number;
  client: IClient;
  device: IDevice;
  accessories?: string;
  status: Status;
  reportedIssues: string;
  findedIssues: string;
  performedServices?: string;
  hasParts: boolean;
  usedParts?: string;
  technician?: ITechnician;
  createdAt: string;
}

type Status = 'Fila' | 'Diagnóstico' | 'Execução' | 'Pronto' | 'Condenado';
