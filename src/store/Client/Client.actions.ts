import { IClientForm } from 'models';

export const create = (formClient: IClientForm) => {
  return {
    type: 'CREATE',
    payload: formClient
  };
};

export const update = (formClient: IClientForm) => {
  return {
    type: 'UPDATE',
    payload: formClient
  };
};

export const getOne = (id: string) => {
  return {
    type: 'GET_ONE',
    payload: id
  };
};

export const getAll = () => {
  return {
    type: 'GET_ALL',
    payload: undefined
  };
};