import { useState } from 'react';

import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import PeopleIcon from '@mui/icons-material/People';

// ----------------------------------------------------------------------

const USER_TYPES = [
  {
    value: 'data_entry',
    label: 'Data Entry',
    // icon: '/assets/icons/ic_flag_de.svg',
  },
  {
    value: 'approver',
    label: 'Approver',
    // icon: '/assets/icons/ic_flag_fr.svg',
  },
];

// ----------------------------------------------------------------------

export default function ProfilePopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

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
        {USER_TYPES.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleClose()}
            sx={{ typography: 'body2', py: 1 }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}

