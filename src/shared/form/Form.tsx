import { FormEventHandler, PropsWithChildren } from 'react';
import { FormContainer } from './styles';

interface IFormProps {
  children: PropsWithChildren<any>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const Form = ({ children, onSubmit }: IFormProps) => {
  return <FormContainer onSubmit={onSubmit}>{children}</FormContainer>;
};
