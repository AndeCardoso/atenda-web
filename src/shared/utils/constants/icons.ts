export interface IObjectKeys {
  [key: string]: string | number;
}

export interface IIcons extends IObjectKeys{
  home: string;
  newOS: string;
  newClient: string;
  schedule: string;
}

export const muiIcons: IIcons = {
  home: 'home',
  newOS: 'edit_note',
  newClient: 'assignment_ind',
  schedule: 'calendar_month',
};