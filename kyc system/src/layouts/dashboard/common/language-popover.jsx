
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import PeopleIcon from '@mui/icons-material/People';
import { Context } from 'src/routes/Store'; // Import the context

const USER_TYPES = [
  {
    value: 'data_entry',
    label: 'Data Entry',
  },
  {
    value: 'approver',
    label: 'Approver',
  },
];

export default function ProfilePopover() {
  const { state } = useContext(Context); // Get the state from the context
  const { staffRole } = state.user_data; // Get staffRole from user_data
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleRoleChange = (role) => {
    sessionStorage.setItem('currentRole', role);
    handleClose();
    window.location.reload(); // Reload to reflect the change in navigation
  };

  // Filter USER_TYPES based on staffRole
  const filteredUserTypes = USER_TYPES.filter((type) => staffRole.includes(type.value));

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <PeopleIcon alt="Profile" src="/assets/icons/ic_profile.svg" />
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {filteredUserTypes.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleRoleChange(option.value)}
            sx={{ typography: 'body2', py: 1 }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}


