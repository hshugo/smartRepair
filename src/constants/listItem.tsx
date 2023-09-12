import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import { BRAND_LIST, USER_LIST } from './paths';

export const LISTITEMS = [
  {
    to: BRAND_LIST,
    label: 'Brands',
    icon: <DashboardIcon />,
  },
  {
    to: USER_LIST,
    label: 'Users',
    icon: <PeopleIcon />,
  },
];
