import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { AppBar, Badge, Toolbar, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const options = [

 'EUR | Germany',
 'EUR ',

 'USD | United States',
'VND | Vietnam'
];

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event,
    index
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  <>
  
    <AppBar
    sx={{
        position:'relative',
        boxShadow:'none',
        background:'#FFFFFF',
        // borderTop:'1px solid #EBEBEB',
        borderBottom:'1px solid #EBEBEB',
        paddingX:'20px'

    }}>
<Toolbar

sx={{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center'
}}>
<Box className='left'>
<Box sx={{
    // border:'2px solid black',
    display:'flex'
}}>
<List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper',
            
         }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="USD"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            // primary="USD"
        
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>




      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper',
            
         }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="USD"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            // primary="USD"
        
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
</Box>
</Box>



<Box className='middle'>
<img src="https://ecomusnext-themesflat.vercel.app/images/logo/logo.svg" className='ecomus-image' alt="" />
</Box>
<Box
className='right'>

<Box className='all-icons'
sx={{
    color:'black',
    gap:'15px',
    display:'flex',
}}>
<SearchIcon sx={{
  cursor:'pointer'
}}/>
<PersonOutlineOutlinedIcon
sx={{
  cursor:'pointer'
}}/>

<Badge badgeContent={4} color="warning"
sx={{
  cursor:'pointer'
}}>
<FavoriteBorderOutlinedIcon/>

</Badge>
<Badge badgeContent={4} color="warning" 
sx={{
  cursor:'pointer'
}}>
<LocalMallOutlinedIcon/>

</Badge>
</Box>


</Box>
</Toolbar>
    </AppBar>
  
  
  </>
  )
}

export default Navbar

