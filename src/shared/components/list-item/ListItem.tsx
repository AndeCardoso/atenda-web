import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';

interface IObjectKeys {
  [key: string]: string | number;
}

interface IProps {
  label: string;
  icon: string;
}

interface IIcons extends IObjectKeys{
  newOS: string;
  newClient: string;
  schedule: string;
}

export const ListItemComponent = (props: IProps): JSX.Element => {
  const { label, icon } = props;

  const muiIcons: IIcons = {
    newOS: 'edit_note',
    newClient: 'assignment_ind',
    schedule: 'calendar_month',
  };

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon style={{minWidth: 33}}>
          <span className="material-icons">{muiIcons[icon]}</span>
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};
