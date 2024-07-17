// import React, { useState } from 'react';
// import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const DropdownNavItem = ({ title, icon, items }) => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <IconButton
//         onClick={handleClick}
//         color="inherit"
//         aria-controls={open ? 'dropdown-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//       >
//         <ListItemIcon>{icon}</ListItemIcon>
//         <ListItemText primary={title} />
//         <KeyboardArrowDownIcon />
//       </IconButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'dropdown-button',
//         }}
//         id="dropdown-menu"
//       >
//         {items.map((item, index) => (
//           <MenuItem key={index} component="a" href={item.path} onClick={handleClose}>
//             {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
//             <ListItemText primary={item.title} />
//           </MenuItem>
//         ))}
//       </Menu>
//     </>
//   );
// };

// export default DropdownNavItem;
