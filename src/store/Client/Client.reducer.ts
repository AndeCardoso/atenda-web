interface IAction {
  type: string;
  payload: object;
}

export default (state: any, action: IAction) => {
  const reducer: any = {
    'CREATE': () => console.log('create ' + state),
    'UPDATE': () => console.log('update ' + state),
    'GET_ONE': () => console.log('getOne ' + state),
    'GET_ALL': () => console.log('getAll ' + state),
  };
  return reducer[action.type]();
};