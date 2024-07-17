import GroupIcon from '@mui/icons-material/Group';
import InboxIcon from '@mui/icons-material/Inbox';
// import GradingIcon from '@mui/icons-material/Grading';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import ApartmentIcon from '@mui/icons-material/Apartment';
import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';



// import SvgColor from 'src/components/svg-color';
// ----------------------------------------------------------------------

// const icon = (name) => (
//   <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
// );

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: <DashboardIcon />,
  },
  {
    title: 'Screening',
    icon: <AccountCircleIcon />,
    items: [
      {
        title: 'Sub-item 1',
        path: '/screening/sub-item-1',
        icon: <InboxIcon />,
      },
      {
        title: 'Sub-item 2',
        path: '/screening/sub-item-2',
        icon: <GroupIcon />,
      },
    ],
  },
  // {
  //   title: 'My Profile',
  //   path: '/profile',
  //   icon: <AccountCircleIcon />,
  // },
  {
    title: 'inbox',
    path: '/products',
    icon: <InboxIcon />,
  },
  {
    title: 'My team',
    path: '/user',
    icon: <GroupIcon />,
  },
  {
    title: 'Finance',
    path: '/login',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Organisation',
    path: '/404',
    icon: <CorporateFareIcon />,
  },
];

// const navConfig = [
//   {
//     title: 'dashboard',
//     path: '/',
//     icon: <DashboardIcon />,
//   },
//   {
//     title: 'attendance',
//     path: '/user',
//     icon: <HowToRegIcon />,
//   },
//   {
//     title: 'leaves',
//     path: '/products',
//     icon: <PersonRemoveIcon />,
//   },
//   {
//     title: 'employees',
//     path: '/blog',
//     icon: <GroupIcon />,
//   },
//   {
//     title: 'departments',
//     path: '/login',
//     icon: <ApartmentIcon />,
//   },
//   {
//     title: 'entitlements',
//     path: '/404',
//     icon: <GradingIcon />,
//   },
// ];

export default navConfig;
