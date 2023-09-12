import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { LISTITEMS } from '../constants/listItem';

export default function ListItems() {
  return (
    <div>
      {LISTITEMS.map((item, index) => {
        return (
          <Link to={item.to} key={index}>
            <ListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          </Link>
        );
      })}
    </div>
  );
}
