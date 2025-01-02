import React, { useState } from "react";
import "../../Assets/Css/Navbar.css";
import flag1 from "../../Assets/img/image/flag1.svg";
import card1 from "../../Assets/img/image/card1.jpg";

import Box from "@mui/material/Box";
import {
  AppBar,
  Badge,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,
  Drawer,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch, IoSearchOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import AddCartDrawer from "../../View/AddCartDrawer";
import { CiHome } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";

const Navbar = ({ modalopen, loginmodal, searchdrawerevent }) => {
  const [anchorEl1, setAnchorEl1] = useState(null); // State for first menu
  const [anchorEl2, setAnchorEl2] = useState(null); // State for second menu
  const [selectedIndex1, setSelectedIndex1] = useState(1);
  const [selectedIndex2, setSelectedIndex2] = useState(0);

  const options3 = [
    {
      id: "1",
      text: "EUR | Germany",
      img: { card1 },
    },
    {
      id: "2",
      text: "EUR",
      img: { card1},
    },
    {
      id: "3",
      text: "USD | United States",
      img: { card1},
    },
    {
      id: "4",
      text: "VND | Vietnam",
      img: {card1 },
    },
  ];
  const options = [
    "EUR | Germany",
    "EUR",
    "USD | United States",
    "VND | Vietnam",
  ];
  const options2 = ["English", "Hindi", "Gujarati"];
  const alliconimg = [flag1];
  // Handlers for first menu
  const handleClickListItem1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMenuItemClick1 = (event, index) => {
    setSelectedIndex1(index);
    setAnchorEl1(null);
    console.log(selectedIndex1,index)
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

  const [openaddcartdrawer, setopenaddcartdrawer] = useState(false);
  const addcartdrawerevent = () => {
    setopenaddcartdrawer(true);
  };

  const [openMenu, setOpenMenu] = useState(false);

  const [hometouch, sethometouch] = useState(false);
  const [shoptouch, setshoptouch] = useState(false);
  const [productstouch, setproductstouch] = useState(false);
  const [pagestouch, setpagestouch] = useState(false);
  const [blogstouch, setblogstouch] = useState(false);

  const [shoplayouttouch, setshoplayouttouch] = useState(false);
  const [featuretouch, setfeaturetouch] = useState(false);
  const [productstyletouch, setproductstyletouch] = useState(false);

  const homedrawermenu = [
    { id: 1, title: "Home Fashion 01", path: "#" },
    { id: 2, title: "Home Fashion 02", path: "#" },
    { id: 3, title: "Home Fashion 03", path: "#" },
    { id: 4, title: "Home Fashion 04", path: "#" },
    { id: 5, title: "Home Fashion 05", path: "#" },
    { id: 6, title: "Home Fashion 06", path: "#" },
    { id: 7, title: "Home Fashion 07", path: "#" },
    { id: 8, title: "Home Fashion 08", path: "#" },
    { id: 9, title: "Home Gift Card", path: "#" },
    { id: 10, title: "Home Headphone", path: "#" },
    { id: 11, title: "Home Multi Brand", path: "#" },
    { id: 12, title: "Home Skincare", path: "#" },
    { id: 13, title: "Home Furniture", path: "#" },
    { id: 14, title: "Home Furniture 2", path: "#" },
    { id: 15, title: "Home Skateboard", path: "#" },
    { id: 16, title: "Home Stroller", path: "#" },
    { id: 17, title: "Home Decor", path: "#" },
    { id: 18, title: "Home Electronic", path: "#" },
    { id: 19, title: "Home Setup Gear", path: "#" },
    { id: 20, title: "Home Dog Accessories", path: "#" },
    { id: 21, title: "Home Kitchen Wear", path: "#" },
    { id: 22, title: "Home Phonecase", path: "#" },
    { id: 23, title: "Home Paddle Boards", path: "#" },
    { id: 24, title: "Home Glasses", path: "#" },
    { id: 25, title: "Home POD Store", path: "#" },
    { id: 26, title: "Home Activewear", path: "#" },
    { id: 27, title: "Home Handbag", path: "#" },
    { id: 28, title: "Home Tee", path: "#" },
    { id: 29, title: "Home Sock", path: "#" },
    { id: 30, title: "Home Jewelry", path: "#" },
    { id: 31, title: "Home Sneaker", path: "#" },
    { id: 32, title: "Home Accessories", path: "#" },
    { id: 33, title: "Home Grocery", path: "#" },
    { id: 34, title: "Home Baby", path: "#" },
  ];

  const shoplayoutdrawermenu = [
    { id: 1, title: "Default", path: "#" },
    { id: 2, title: "Left Sidebar", path: "#" },
    { id: 3, title: "Right Sidebar", path: "#" },
    { id: 4, title: "Fullwidth", path: "#" },
    { id: 5, title: "Sub Collection", path: "#" },
    { id: 6, title: "Collections List", path: "#" },
  ];

  const pagedrawermenu = [
    { id: 1, title: "About Us", path: "#" },
    { id: 2, title: "Brands", path: "#" },
    { id: 3, title: "New", path: "#" },
    { id: 4, title: "Brands V2", path: "#" },
    { id: 5, title: "Contact 1", path: "#" },
    { id: 6, title: "Contact 2", path: "#" },
    { id: 7, title: "FAQ 01", path: "#" },
    { id: 8, title: "FAQ 02", path: "#" },
    { id: 9, title: "Our Store", path: "#" },
    { id: 10, title: "Store Locator", path: "#" },
    { id: 11, title: "Timeline", path: "#" },
    { id: 12, title: "New", path: "#" },
    { id: 13, title: "View Cart", path: "#" },
    { id: 14, title: "My Account", path: "#" },
    { id: 15, title: "Wishlist", path: "#" },
    { id: 16, title: "Terms and Conditions", path: "#" },
    { id: 17, title: "404 Page", path: "#" },
  ];

  const blogsdrawermenu = [
    { id: 1, title: "Grid Layout", path: "#" },
    { id: 2, title: "Left Sidebar", path: "#" },
    { id: 3, title: "Right Sidebar", path: "#" },
    { id: 4, title: "Blog List", path: "#" },
    { id: 5, title: "Single Post", path: "#" },
  ];

  const featuredrawermenu = [
    { id: 1, title: "Pagination Links", path: "#" },
    { id: 2, title: "Pagination Load More", path: "#" },
    { id: 3, title: "Pagination Infinite Scrolling", path: "#" },
    { id: 4, title: "Filter Sidebar", path: "#" },
    { id: 5, title: "Filter Hidden", path: "#" },
  ];

  const productstyledrawermenu = [
    { id: 1, title: "Product Style 01", path: "#" },
    { id: 2, title: "Product Style 02", path: "#" },
    { id: 3, title: "Product Style 03", path: "#" },
    { id: 4, title: "Product Style 04", path: "#" },
    { id: 5, title: "Product Style 05", path: "#" },
    { id: 6, title: "Product Style 06", path: "#" },
    { id: 7, title: "Product Style 07", path: "#" },
  ];

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
            "@media (min-width:767px)": {
              paddingLeft: "30px !important",
              paddingRight: "30px !important",
            },
          }}
        >
          <Box
            className="left"
            sx={{
              fontFamily: "Albert sans",
            }}
          >
            <RiMenu2Fill
              className="left-menuicon"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            />

            <Box
              className="dropdown"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Albert sans",
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
                    maxWidth: "122px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Albert sans",

                    // border:'1px solid black'
                  }}
                >
                  <ListItemText
                    // secondary={options[selectedIndex1]}
                    secondaryTypographyProps={{
                      fontFamily: "Albert sans",
                      fontSize: "14px",
                    }}
                    sx={{
                      // maxWidth: "150px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",

                      // border:'1px solid red'
                    }}
                  >
                    <div
                      className="alhaj-list"
                      style={{
                        display: "flex",
                        fontFamily: "Albert sans",
                        // border: "1px solid red",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={flag1}
                        alt=""
                        style={{
                          height: "20px",
                          width: "20px",
                          // border:'1px solid black'
                        }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          color: "black",
                          fontFamily: "Albert sans",

                          // border: "1px solid black",
                        }}
                      >
                        {options3[selectedIndex1].text}
                      </span>
                    </div>
                  </ListItemText>

                  <KeyboardArrowDownOutlinedIcon
                    sx={{
                      color: "rgb(83, 83, 83)",
                      // color: "rgb(112, 110, 110)",

                      fontSize: "21px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
              </List>
              <Menu
                disablePortal
                disableScrollLock
                id="lock-menu1"
                anchorEl={anchorEl1}
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
                sx={{
                  padding: "0",
                  margin: "0",
                  fontFamily: "Albert sans",
                }}
              >
                {options.map((option, index) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Albert sans",
                    }}
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
                    secondaryTypographyProps={{
                      fontFamily: "Albert sans",
                      fontSize: "14px",
                    }}
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
                      color: "rgb(83, 83, 83)",

                      fontSize: "21px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </ListItemButton>
              </List>
              <Menu
                disablePortal
                disableScrollLock
                id="lock-menu2"
                anchorEl={anchorEl2}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                {options2.map((option, index) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Albert sans",
                    }}
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
              <SearchIcon
                className="nav-icon one"
                sx={{ cursor: "pointer" }}
                onClick={searchdrawerevent}
              />
              <PersonOutlineOutlinedIcon
                className="nav-icon two"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  modalopen();
                }}
              />
              <Badge
                className="nav-icon three"
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#814037", // Custom color
                    color: "white",
                    fontSize: "11px",
                    // Text color inside the badge
                  },
                  cursor: "pointer",
                }}
              >
                <FavoriteBorderOutlinedIcon />
              </Badge>
              <Badge
                className="nav-icon four"
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#814037", // Custom color for another badge
                    color: "white",
                    fontSize: "11px",
                  },
                  cursor: "pointer",
                }}
              >
                <LocalMallOutlinedIcon
                  className="nav-icon"
                  onClick={addcartdrawerevent}
                />
                <AddCartDrawer
                  openaddcartdrawer={openaddcartdrawer}
                  setopenaddcartdrawer={setopenaddcartdrawer}
                  addcartdrawerevent={addcartdrawerevent}
                />
              </Badge>
            </Box>
          </Box>

          <div className="mobilefooter">
            <div className="footer-icon">
              <CiHome style={{ color: "black" }} />
              <p>Shop</p>
            </div>
            <div className="footer-icon">
              <IoSearch
                className="nav-icon one"
                style={{ cursor: "pointer" }}
                onClick={searchdrawerevent}
              />
              <p>Search</p>
            </div>
            <div className="footer-icon">
              <RxPerson
                className="nav-icon two"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  modalopen();
                }}
              />

              <p>Account</p>
            </div>
            <div className="footer-icon">
              <Badge
                className="nav-icon three"
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#814037", // Custom color
                    color: "white",
                    fontSize: "11px",
                    // Text color inside the badge
                  },
                  cursor: "pointer",
                }}
              >
                <MdOutlineFavoriteBorder />
              </Badge>
              <p>Wishlist</p>
            </div>
            <div className="footer-icon">
              <Badge
                className="nav-icon four"
                badgeContent={4}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#814037", // Custom color for another badge
                    color: "white",
                    fontSize: "11px",
                  },
                  cursor: "pointer",
                }}
              >
                <RiShoppingBag2Line
                  className="nav-icon"
                  onClick={addcartdrawerevent}
                />
                <AddCartDrawer
                  openaddcartdrawer={openaddcartdrawer}
                  setopenaddcartdrawer={setopenaddcartdrawer}
                  addcartdrawerevent={addcartdrawerevent}
                />
              </Badge>
              <p>Cart</p>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className="navbar-drawer"
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        disablePortal
      >
        <Box sx={{ width: 350, position: "relative" }}>
          <Box
            sx={{
              // height: "50px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "20px 20px",
              borderBottom: "2px solid #F2F2F2",
            }}
          >
            <div
              className="close-icon"
              onClick={() => setOpenMenu(false)}
              style={{
                fontSize: "25px",
              }}
            >
              <IoMdClose />
            </div>
          </Box>
          <div className="scroll">
            <div className="all-list">
              <ul>
                <li
                  className="home"
                  onClick={() => {
                    sethometouch(!hometouch);
                  }}
                >
                  Home
                  <ul
                    className="drawerlist"
                    style={{ display: `${hometouch ? "block" : "none"}` }}
                  >
                    {homedrawermenu.map((menu, index) => {
                      return (
                        <li key={index}>
                          <a href={menu.path}>{menu.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li
                  className="shop"
                  onClick={() => {
                    setshoptouch(!shoptouch);
                  }}
                >
                  {" "}
                  Shop
                  <ul
                    className="drawerlist"
                    style={{ display: `${shoptouch ? "block" : "none"}` }}
                  >
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          // setshoptouch(true)
                          setshoplayouttouch(!shoplayouttouch);
                        }}
                      >
                        Shop Layouts
                        <ul
                          className="drawerlist"
                          style={{
                            display: `${shoplayouttouch ? "block" : "none"}`,
                          }}
                        >
                          {shoplayoutdrawermenu.map((menu, index) => {
                            return (
                              <li key={index}>
                                <a href={menu.path}>{menu.title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          setfeaturetouch(!featuretouch);
                        }}
                      >
                        Features
                        <ul
                          className="drawerlist"
                          style={{
                            display: `${featuretouch ? "block" : "none"}`,
                          }}
                        >
                          {featuredrawermenu.map((menu, index) => {
                            return (
                              <li key={index}>
                                <a href={menu.path}>{menu.title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          setproductstyletouch(!productstyletouch);
                        }}
                      >
                        Product Styles
                        <ul
                          className="drawerlist"
                          style={{
                            display: `${productstyletouch ? "block" : "none"}`,
                          }}
                        >
                          {productstyledrawermenu.map((menu, index) => {
                            return (
                              <li key={index}>
                                <a href={menu.path}>{menu.title}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="products"
                  onClick={() => {
                    setproductstouch(!productstouch);
                  }}
                >
                  Products
                  <ul
                    className="drawerlist"
                    style={{ display: `${productstouch ? "block" : "none"}` }}
                  >
                    <li>Product layout</li>
                    <li>Product details</li>

                    <li>Product layout</li>
                    <li>Product swatchs</li>
                    <li>Product features</li>
                  </ul>
                </li>
                <li
                  className="pages"
                  onClick={() => {
                    setpagestouch(!pagestouch);
                  }}
                >
                  Pages
                  <ul
                    className="drawerlist"
                    style={{ display: `${pagestouch ? "block" : "none"}` }}
                  >
                    {pagedrawermenu.map((menu, index) => {
                      return (
                        <li key={index}>
                          <a href={menu.path}>{menu.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li
                  className="blogs"
                  onClick={() => {
                    setblogstouch(!blogstouch);
                  }}
                >
                  Blogs
                  <ul
                    className="drawerlist"
                    style={{ display: `${blogstouch ? "block" : "none"}` }}
                  >
                    {blogsdrawermenu.map((menu, index) => {
                      return (
                        <li key={index}>
                          <a href={menu.path}>{menu.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
                <li>Buy Now</li>
              </ul>
            </div>
            <div className="btn-group">
              <Button variant="contained" className="btn">
                {" "}
                <MdFavoriteBorder
                  style={{
                    marginRight: "8px",
                    fontSize: "18px",
                  }}
                />{" "}
                Wishlist
              </Button>
              <Button variant="contained" className="btn">
                {" "}
                <IoSearchOutline
                  style={{
                    marginRight: "8px",
                    fontSize: "18px",
                  }}
                />{" "}
                Search
              </Button>
            </div>
            <p className="need-help">Need Help ?</p>
            <div className="contact">
              <p>Address: 1234 Fashion Street, Suite 567, New York, NY 10001</p>
              <p>
                Email: <span>info@fashionshop.com</span>
              </p>
              <p>
                Phone: <span> (212) 555-1234</span>
              </p>
            </div>
          </div>

          <div className="drawer-footer">
            <Button variant="contained" className="btn">
              <GoPerson
                style={{
                  marginRight: "8px",
                  fontSize: "18px",
                }}
              />
              Login
            </Button>
            <Box
              className="drawer-dropdown"
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
                    // border:'1px solid black'
                  }}
                >
                  <ListItemText
                    secondary={options[selectedIndex1]}
                    sx={{
                      fontSize: "14px",
                      // maxWidth: "150px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      // border:'1px solid red'
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
                disablePortal
                disableScrollLock
                id="lock-menu1"
                anchorEl={anchorEl1}
                open={Boolean(anchorEl1)}
                onClose={handleClose1}
                sx={{
                  padding: "0",
                  margin: "0",
                }}
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
                disablePortal
                disableScrollLock
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
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
