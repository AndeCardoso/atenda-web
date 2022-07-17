import { IClient } from './client';

export interface IDevice {
  client: IClient;
  typeEquip: typeEquip;
  serialNumber?: string;
  brand: string;
  model: string;
  observations?: string;
}

export type typeEquip = 'desktop' | 'notebook' | 'celular' | 'tablet';
