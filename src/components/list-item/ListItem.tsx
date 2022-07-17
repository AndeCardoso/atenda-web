import { ListItem, ListItemIcon, ListItemText, ListItemButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { muiIcons } from 'utils/constants';

interface IProps {
  label: string;
  icon: string;
  link: string;
  minimal: boolean;
}

export const ListItemComponent = (props: IProps): JSX.Element => {
  const { label, icon, link, minimal } = props;

  return (
    <Link to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ListItem disablePadding>
        <ListItemButton>
          {!minimal ? (
            <Tooltip title={label} arrow disableInteractive={true} placement="right">
              <ListItemIcon style={{ minWidth: 33 }}>
                <span className="material-icons">{muiIcons[icon]}</span>
              </ListItemIcon>
            </Tooltip>
          ) : (
            <>
              <ListItemIcon style={{ minWidth: 33 }}>
                <span className="material-icons">{muiIcons[icon]}</span>
              </ListItemIcon>
              <ListItemText primary={label} />
            </>
          )}
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
