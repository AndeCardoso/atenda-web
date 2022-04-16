import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { muiIcons } from 'shared/utils/constants';

interface IProps {
  label: string;
  icon: string;
  link: string;
}

export const ListItemComponent = (props: IProps): JSX.Element => {
  const { label, icon, link } = props;

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
