import { IClient, IServiceOrder } from 'models';
import { IClientColumns } from './ClientTableModels';
import { IServiceOrderColumns } from './ServiceOrderTableModel';

export type TypeData = IClient[] | IServiceOrder[];
export type TypeColumns = IClientColumns | IServiceOrderColumns;
export type TypeTable = 'Client' | 'ServiceOrder';
