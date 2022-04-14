import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface IObjectKeys {
  [key: string]: string | number;
}

interface IProps {
  label: string;
  icon: string;
  link: string;
}

interface IIcons extends IObjectKeys{
  newOS: string;
  newClient: string;
  schedule: string;
}

export const ListItemComponent = (props: IProps): JSX.Element => {
  const { label, icon, link } = props;

  const muiIcons: IIcons = {
    newOS: 'edit_note',
    newClient: 'assignment_ind',
    schedule: 'calendar_month',
  };

  return (
    <Link to={link} style={{textDecoration: 'none', color: 'inherit'}}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon style={{minWidth: 33}}>
            <span className="material-icons">{muiIcons[icon]}</span>
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
