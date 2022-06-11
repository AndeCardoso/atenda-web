interface IRegex {
  email: RegExp;
  min6: RegExp;
}

export const regExp = <IRegex>{
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
  min6: /^.{6,}$/,
};