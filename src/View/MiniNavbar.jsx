import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import '../Assets/Css/MiniNavbar.css'
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
// import '../Assets/Css/SampleMenu.css'
import productmenu1 from  '../Assets/img/image/product-menu1.jpg'
import productmenu2 from  '../Assets/img/image/product-menu2.jpg'
import { Button } from "@mui/material";
import { LuArrowUpRight } from 'react-icons/lu';
import SampleMenu from './SampleMenu';



const MiniNavbar = () => {

const blogmenu=[
  
  
  

  { id: 1, title: "  Grid layout" },
  { id: 2, title: "  Left sidebar" },
  { id: 3, title: "Blog list" },
  { id: 4, title: "Single Post" },

]

const minimenuitems = [
  {
    id: 1,
    title: "About Us",
    icon: (
      <KeyboardArrowRightOutlinedIcon
        sx={{
          fontSize: "20px",
        }}
      />
    ),
  },
  {
    id: 2,
    title: "Brands",
    icon: (
      <KeyboardArrowRightOutlinedIcon
        sx={{
          fontSize: "20px",
        }}
      />
    ),
  },
  {
    id: 3,
    title: "Contact",
    icon: (
      <KeyboardArrowRightOutlinedIcon
        sx={{
          fontSize: "20px",
        }}
      />
    ),
  },
  {
    id: "4",
    title: "FAQ",
  },
  {
    id: "5",
    title: "Store",
    icon: (
      <KeyboardArrowRightOutlinedIcon
        sx={{
          fontSize: "20px",
        }}
      />
    ),
  },
  {
    id: "6",
    title: "Timeline",
  },
  {
    id: "7",
    title: "View Cart",
  },
  {
    id: "8",
    title: "Checkout",
  },
  {
    id: "9",
    title: "Payment",
  },
];

    
      const secondminiitems = [
        { id: 1, title: "Tools" },
        { id: 2, title: "Christmas" },
        { id: 3, title: "Marketplace" },
        { id: 4, title: "Game" },
        { id: 5, title: "Gym" },
        { id: 6, title: "Marijuana" },
        { id: 7, title: "Left-Sidebar" },
        { id: 8, title: "Jewellery" },
        { id: 9, title: "Video-Slider" },
        { id: 10, title: "Nursery" },
      ];
      const thirdminiitems = [
        { id: 1, title: "Fashion1" },
        { id: 2, title: "Fashion2" },
        { id: 3, title: "Fashion3" },
        { id: 4, title: "Kids" },
      ];
    
      const fourthminiitems = [
        { id: 1, title: "LookBook" },
        { id: 2, title: "Video" },
        { id: 3, title: "Parallax" },
        { id: 4, title: "Full Page" },
      ];
    
      const fifthminiitems = [
        { id: 1, title: "Electronic-1" },
        { id: 2, title: "Electronic-2" },
      ];
    
  return (
   <>


<Box className='mininavbar-container' 
sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px',
    paddingY:'20px'
}}>

<ul className='list-container'>
    <li className='list home'><a href="#" className=' list-text active'>Home
   
        <KeyboardArrowDownOutlinedIcon/>
        </a></li>
    <li className='list shop'><a className='list-text' href="#">Shop
    <div className="shop-menu">
        <div className="shop-container">
          <div className="row-container">
          <div className="row">
            <div className="col one">
              <div className="heading">Shop Layouts</div>
              <ul>
                <li>
                  <a href="#"> Default</a>
                </li>
                <li>
                  <a href="#"> Left sidebar</a>
                </li>
                <li>
                  <a href="#">Right sidebar</a>
                </li>
                <li>
                  <a href="#"> Fullwidth</a>
                </li>
                <li>
                  <a href="#">Sub collection</a>
                </li>
                <li>
                  Collections list
                  <a href="#"></a>
                </li>
              </ul>
            </div>
            <div className="col two">
                <div className="heading">Features</div>
                <ul>
                <li>
                  <a href="#">                 Pagination links
                  </a>
                </li>
                <li>
                  <a href="#">Pagination loadmore
                  </a>
                </li>
                <li>
                  <a href="#">Pagination infinite scrolling
                  </a>
                </li>
                <li>
                  <a href="#"> Filter sidebar
                  </a>
                </li>
                <li>
                  <a href="#">Filter hidden
                  </a>
                </li>
                
              </ul>

            </div>
            <div className="col three">
                <div className="heading">Product Styles</div>
<ul>
                <li>
                  <a href="#">                 Product style list

                  </a>
                </li>
                <li>
                  <a href="#">Product style 01

                  </a>
                </li>
                <li>
                  <a href="#">Product style 02

                  </a>
                </li>
                <li>
                  <a href="#">Product style 03

                  </a>
                </li>
                <li>
                  <a href="#">Product style 04

                  </a>
                </li>
                <li>
                  <a href="#">Product style 05

                  </a>
                </li>
                <li>
                  <a href="#">Product style 06

                  </a>
                </li>
                <li>
                  <a href="#">Product style 07

                  </a>
                </li>
                
              </ul>
            </div>
            <div className="col four">
<div className="menu-img">
    <img src={productmenu1} alt="" />
     <Button
                        className="btn"
                        variant="contained"
                        disableRipple
                        disableElevation
                      >
                        Men <LuArrowUpRight className="arrow-up" />
                      </Button>
</div>

            </div>
            <div className="col five">


            <div className="menu-img">
    <img src={productmenu2} alt="" />
     <Button
                        className="btn"
                        variant="contained"
                        disableRipple
                        disableElevation
                      >
                        Men <LuArrowUpRight className="arrow-up" />
                      </Button>
</div>
            </div>

          </div>
          </div>
        </div>
      </div>
    <KeyboardArrowDownOutlinedIcon/>

    </a></li>
    <li className='list product'><a className='list-text' href="#">Product
   <SampleMenu/>

    <KeyboardArrowDownOutlinedIcon/>
    </a></li>

    <li className='list pages'><a className='list-text' href="#" >Pages
    {/* <Box
                  className="menubox"
                  sx={{
                    // border:'2px solid black',
                    position: "absolute",
                    top: "20px",
                    paddingTop: "40px",
                    width: "200px",
                    display: "none",
                    zIndex: "10",
                  }}
                >
                  <List
                    className="menulist"
                    sx={{
                      position: "relative",
                      top: "0px",
                      paddingTop: "40px",
                      //   border:'2px solid black',
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 20px",
                      bgcolor: "white",
                      width: "100%",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {[
                      "About Us",
                      "Brands",
                      "Contact",
                      "FAQ",
                      "Store",
                      "Timeline",
                      "View Cart",
                      "Checkout",
                      "Payment",
                    ].map((item, index) => (
                      <ListItem key={index} sx={{ paddingX: "0" }}>
                        <ListItemText
                          primary={item}
                          sx={{
                            fontSize: "10px",
                            fontWeight: "bold",
                            "&::after": {
                              position: "absolute",
                              content: "''",
                              bottom: 0,
                              left: 0,
                              width: "0",
                              height: "2px",
                              bgcolor: "#5FCBC4",

                              transition: "width 0.3s ease",
                            },
                            "&:hover::after": {
                              width: "50%",
                            },
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box> */}







<Box
                  className="menubox"
                  sx={{
                    position: "absolute",
                    top: "25px",
                    // paddingTop: "40px",
                    // width: "200px",
                    display: "none",
                    zIndex: "10",
                    // border:'1px solid'
                  }}
                >
                  <List
                    className="menulist"
                    sx={{
                      position: "relative",
                      top: "15px",
                        // border:'2px solid black',
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "10px 20px",
                      paddingTop: "20px",

                      bgcolor: "white",
                      width: "100%",
                    width: "200px",
                    cursor:'default',

                      transition: "all 0.3s ease",
                    }}
                  >
                    {minimenuitems.map((item, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          paddingX: "0",
                          py:'0px',
                          cursor:'pointer',

// border:'1px solid black',
mb:'3px',
                          "&:hover .secondmenubox": {
                            display: "flex",
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.title}
                          primaryTypographyProps={{
                            fontSize: "15px",
                            transition:'all 0.3s ease',
                           
                            // fontWeight: "bold",
                          }}

                          sx={{
                            '&:hover':{
                              color:'#814037'
                            },
                          
                           
                          }}
                        />
                        {item.icon}

                        {index === 0 && (
                          <Box
                            className="secondmenubox"
                            sx={{
                              // border:'2px solid black',
                              display: "none",
                              position: "absolute",
                              top: "-20px",
                              left: "100%",

                              paddingTop: "40px",
                              width: "200px",
                              display: "none",
                              zIndex: "10",
                            }}
                          >
                            <List
                              className="menulist"
                              sx={{
                                position: "relative",
                                top: "0px",
                                paddingTop: "40px",
                                //   border:'2px solid black',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 20px",
                                bgcolor: "white",
                                width: "100%",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {secondminiitems.map((item, index) => (
                                <ListItem key={index} sx={{ paddingX: "0" }}>
                                  <ListItemText
                                    primary={item.title}
                                    sx={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      "&::after": {
                                        position: "absolute",
                                        content: "''",
                                        bottom: 0,
                                        left: 0,
                                        width: "0",
                                        height: "2px",
                                        bgcolor: "#5FCBC4",

                                        transition: "width 0.3s ease",
                                      },
                                      "&:hover::after": {
                                        width: "50%",
                                      },
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}

                        {index === 1 && (
                          <Box
                            className="secondmenubox"
                            sx={{
                              // border:'2px solid black',
                              display: "none",
                              position: "absolute",
                              top: "-20px",
                              left: "100%",

                              paddingTop: "40px",
                              width: "200px",
                              display: "none",
                              zIndex: "10",
                            }}
                          >
                            <List
                              className="menulist"
                              sx={{
                                position: "relative",
                                top: "0px",
                                paddingTop: "40px",
                                //   border:'2px solid black',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 20px",
                                bgcolor: "white",
                                width: "100%",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {thirdminiitems.map((item, index) => (
                                <ListItem key={index} sx={{ paddingX: "0" }}>
                                  <ListItemText
                                    primary={item.title}
                                    sx={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      "&::after": {
                                        position: "absolute",
                                        content: "''",
                                        bottom: 0,
                                        left: 0,
                                        width: "0",
                                        height: "2px",
                                        bgcolor: "#5FCBC4",

                                        transition: "width 0.3s ease",
                                      },
                                      "&:hover::after": {
                                        width: "50%",
                                      },
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}

                        {index === 2 && (
                          <Box
                            className="secondmenubox"
                            sx={{
                              // border:'2px solid black',
                              display: "none",
                              position: "absolute",
                              top: "-20px",
                              left: "100%",

                              paddingTop: "40px",
                              width: "200px",
                              display: "none",
                              zIndex: "10",
                            }}
                          >
                            <List
                              className="menulist"
                              sx={{
                                position: "relative",
                                top: "0px",
                                paddingTop: "40px",
                                //   border:'2px solid black',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 20px",
                                bgcolor: "white",
                                width: "100%",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {fourthminiitems.map((item, index) => (
                                <ListItem key={index} sx={{ paddingX: "0" }}>
                                  <ListItemText
                                    primary={item.title}
                                    sx={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      "&::after": {
                                        position: "absolute",
                                        content: "''",
                                        bottom: 0,
                                        left: 0,
                                        width: "0",
                                        height: "2px",
                                        bgcolor: "#5FCBC4",

                                        transition: "width 0.3s ease",
                                      },
                                      "&:hover::after": {
                                        width: "50%",
                                      },
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}

                        {index === 4 && (
                          <Box
                            className="secondmenubox"
                            sx={{
                              // border:'2px solid black',
                              display: "none",
                              position: "absolute",
                              top: "-20px",
                              left: "100%",

                              paddingTop: "40px",
                              width: "200px",
                              display: "none",
                              zIndex: "10",
                            }}
                          >
                            <List
                              className="menulist"
                              sx={{
                                position: "relative",
                                top: "0px",
                                paddingTop: "40px",
                                //   border:'2px solid black',
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px 20px",
                                bgcolor: "white",
                                width: "100%",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {fifthminiitems.map((item, index) => (
                                <ListItem key={index} sx={{ paddingX: "0" }}>
                                  <ListItemText
                                    primary={item.title}
                                    sx={{
                                      fontSize: "10px",
                                      fontWeight: "bold",
                                      "&::after": {
                                        position: "absolute",
                                        content: "''",
                                        bottom: 0,
                                        left: 0,
                                        width: "0",
                                        height: "2px",
                                        bgcolor: "#5FCBC4",

                                        transition: "width 0.3s ease",
                                      },
                                      "&:hover::after": {
                                        width: "50%",
                                      },
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Box>




    <KeyboardArrowDownOutlinedIcon/>
    </a></li>
    <li className='list blog'><a className='list-text' href="#">Blog
    <Box
                  className="menubox"
                  sx={{
                    position: "absolute",
                    top: "25px",
                    // paddingTop: "40px",
                    width: "250px",
                    display: "none",
                    zIndex: "10",
                    // border:'1px solid'
                  }}
                >
                  <Box
                    className="menulist"
                    sx={{
                      position: "relative",
                      top: "15px",
                      paddingTop: "40px",
                      //   border:'2px solid black',
                      display: "flex",
                      flexDirection: "column",
                      // justifyContent: "space-between",
                      // alignItems: "center",
                      padding: "10px 20px",
                      gap:'10px',
                      bgcolor: "white",
                      width: "100%",
                      transition: "all 0.3s ease",
                      cursor:'default'
                    }}
                  >
                    {blogmenu.map((item, index) => (
                      // <ListItem
                      //   key={index}
                      //   sx={{
                      //     paddingX: "0",

                      //   }}
                      // >
                        <Typography
                          primary={item.title}
                          sx={{
                            fontSize: "15px",
                            // fontWeight: "bold",
                            cursor:'pointer',
                            transition:'all 0.3s ease',
                            '&:hover':{
                              color:'#814037'
                            },
                            
                           
                          }}>{item.title}</Typography>

                       
                     
                      // </ListItem>
                    ))}
                  </Box>
                </Box>
    <KeyboardArrowDownOutlinedIcon/>
    </a></li>
    <li className='list buynow'><a className='list-text' href="#">Buy Now</a></li>

</ul>

</Box>
{/* <SampleMenu/> */}


   </>
  )
}

export default MiniNavbar
