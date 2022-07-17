export interface IObjectKeys {
  [key: string]: string | number;
}

export interface IIcons extends IObjectKeys {
  home: string;
  newOS: string;
  newClient: string;
  calendar: string;
  technician: string;
}

export const muiIcons: IIcons = {
  home: 'home',
  newOS: 'edit_note',
  newDevice: 'devices',
  newClient: 'assignment_ind',
  calendar: 'calendar_month',
  technician: 'handyman',
};
