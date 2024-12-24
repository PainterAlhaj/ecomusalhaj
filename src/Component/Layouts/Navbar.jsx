import React, { useState } from "react";
import '../../Assets/Css/Navbar.css';

import Box from "@mui/material/Box";
import { AppBar, Badge, Toolbar, List, ListItemButton, ListItemText, MenuItem, Menu } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  const [anchorEl1, setAnchorEl1] = useState(null); // State for first menu
  const [anchorEl2, setAnchorEl2] = useState(null); // State for second menu
  const [selectedIndex1, setSelectedIndex1] = useState(1);
  const [selectedIndex2, setSelectedIndex2] = useState(0);

  const options = ["EUR | Germany", "EUR", "USD | United States", "VND | Vietnam"];
  const options2 = ["English", "Hindi", "Gujarati"];

  // Handlers for first menu
  const handleClickListItem1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenuItemClick1 = (event, index) => {
    setSelectedIndex1(index);
    setAnchorEl1(null);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  // Handlers for second menu
  const handleClickListItem2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuItemClick2 = (event, index) => {
    setSelectedIndex2(index);
    setAnchorEl2(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <>
      <AppBar
        className="appbar"
        sx={{
          position: "relative",
          boxShadow: "none",
          background: "#FFFFFF",
        }}
      >
        <Toolbar
          className="toolbar"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#FFFFFF",
            borderBottom: "1px solid #EBEBEB",
            paddingX: "20px",
          }}
        >
          <Box className="left">
            <RiMenu2Fill className="left-menuicon" />
            <Box
              className="dropdown"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* First Menu */}
              <List component="nav" aria-label="Device settings">
                <ListItemButton
                  id="lock-button1"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu1"
                  aria-expanded={Boolean(anchorEl1) ? "true" : undefined}
                  onClick={handleClickListItem1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    maxWidth: "85px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  <ListItemText
                    secondary={options[selectedIndex1]}
                    sx={{
                      fontSize: "14px",
                      maxWidth: "150px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  />
                  <KeyboardArrowDownOutlinedIcon
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
              </List>
              <Menu
                id="lock-menu1"
                anchorEl={anchorEl1}
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    disabled={index === 0}
                    selected={index === selectedIndex1}
                    onClick={(event) => handleMenuItemClick1(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>

              {/* Second Menu */}
              <List component="nav" aria-label="Language settings">
                <ListItemButton
                  id="lock-button2"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu2"
                  aria-expanded={Boolean(anchorEl2) ? "true" : undefined}
                  onClick={handleClickListItem2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    maxWidth: "200px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  <ListItemText
                    secondary={options2[selectedIndex2]}
                    sx={{
                      fontSize: "14px",
                      maxWidth: "150px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  />
                  <KeyboardArrowDownOutlinedIcon
                    sx={{
                      color: "black",
                      fontSize: "18px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
              </List>
              <Menu
                id="lock-menu2"
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                {options2.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex2}
                    onClick={(event) => handleMenuItemClick2(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          <Box className="middle">
            <img
              src="https://ecomusnext-themesflat.vercel.app/images/logo/logo.svg"
              className="ecomus-image"
              alt=""
            />
          </Box>

          <Box className="right">
            <Box
              className="all-icons"
              sx={{
                color: "black",
                gap: "15px",
                display: "flex",
              }}
            >
              <SearchIcon className="one" sx={{ cursor: "pointer" }} />
              <PersonOutlineOutlinedIcon className="two" sx={{ cursor: "pointer" }} />
              <Badge
                className="three"
                badgeContent={4}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#814037', // Custom color
                    color: 'white', 
                    fontSize:'11px'
                    // Text color inside the badge
                  },
                  cursor: 'pointer',
                }}
              >
                <FavoriteBorderOutlinedIcon />
              </Badge>
              <Badge
                className="four"
                badgeContent={4}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#814037', // Custom color for another badge
                    color: 'white',
                    fontSize:'11px'
                  },
                  cursor: 'pointer',
                }}
              >
                <LocalMallOutlinedIcon />
              </Badge>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
