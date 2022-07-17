interface IMask {
  phone: string;
  cpf: string;
  cep: string;
}

export const maskInput = <IMask>{
  phone: '(99) 9 9999-9999',
  cpf: '999.999.999-99',
  cep: '99999-999',
};
