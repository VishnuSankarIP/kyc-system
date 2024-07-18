
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import DashboardIcon from '@mui/icons-material/Dashboard';


const navConfigMicAdmin = [
  {
    title: 'Overview',
    path: '/overviewtab',
    icon: <DashboardIcon />,
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: <PeopleIcon />,
  },
  {
    title: 'Screenings',
    path: '/screenings',
    icon: <AccountCircleIcon />,
  },
  {
    title: 'Approvals',
    path: '/approvals',
    icon: <CheckCircleIcon />,
  },
  {
    title: 'Staffs',
    path: '/staffs',
    icon: <VisibilityIcon />,
  },
];

const navConfigCompanyAdmin = [
  {
    title: 'Overview',
    path: '/overviewtab',
    icon: <DashboardIcon />,
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: <PeopleIcon />,
  },
  {
    title: 'Staffs',
    path: '/staffs',
    icon: <VisibilityIcon />,
  },
];

const navConfigDataEntry = [
  {
    title: 'Overview',
    path: '/overviewtab',
    icon: <DashboardIcon />,
  },
  {
    title: 'Screenings',
    path: '/screenings',
    icon: <AccountCircleIcon />,
  },
  {
    title: 'Screened Data',
    path: '/screened-data',
    icon: <DataUsageIcon />,
  },
];

const navConfigApprover = [
  {
    title: 'Overview',
    path: '/overviewtab',
    icon: <DashboardIcon />,
  },
  {
    title: 'Approvals',
    path: '/approvals',
    icon: <CheckCircleIcon />,
  },
  {
    title: 'Approved Data',
    path: '/approved-data',
    icon: <DataUsageIcon />,
  },
];

export {navConfigApprover, navConfigMicAdmin,navConfigDataEntry , navConfigCompanyAdmin  };

