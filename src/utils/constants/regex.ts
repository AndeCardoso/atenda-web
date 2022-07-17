interface IRegex {
  email: RegExp;
  min6: RegExp;
}

export const regExp = <IRegex>{
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  phone: /^\(\d{2}\)?\s*\d{4,5}-?\d{4}$/g,
  cep: /^[0-9]{5}-[0-9]{3}$/,
  min6: /^.{6,}$/,
};
