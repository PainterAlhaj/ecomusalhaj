import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import '../Assets/Css/MiniNavbar.css'
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";


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
          title: "New Demo",
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
          title: "Clothing",
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
          title: "Basics",
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
          title: "Beauty",
        },
    
        {
          id: "5",
    
          title: "Electronic",
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
    
          title: "Furniture",
        },
        {
          id: "7",
    
          title: "Vegetables",
        },
    
        {
          id: "8",
    
          title: "Watch",
        },
        {
          id: "9",
    
          title: "Lights",
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


<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px',
    paddingY:'20px'
}}>

<ul className='list-container'>
    <li className='list'><a href="#">Home
   
        <KeyboardArrowDownOutlinedIcon/>
        </a></li>
    <li className='list'><a href="#">Shop
    <KeyboardArrowDownOutlinedIcon/>
    </a></li>
    <li className='list'><a href="#">Product
    <KeyboardArrowDownOutlinedIcon/>
    </a></li>
    <li className='list pages'><a href="#" >Pages
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

{/* <Box
                  className="menubox"
                  sx={{
                    position: "absolute",
                    top: "0",
                    paddingTop: "40px",
                    width: "200px",
                    display: "none",
                    zIndex: "10",
                    // border:'1px solid'
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
                    {minimenuitems.map((item, index) => (
                      <ListItem
                        key={index}
                        sx={{
                          paddingX: "0",

                          "&:hover .secondmenubox": {
                            display: "flex",
                          },
                        }}
                      >
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
                </Box> */}




    <KeyboardArrowDownOutlinedIcon/>
    </a></li>
    <li className='list blog'><a href="#">Blog
    <Box
                  className="menubox"
                  sx={{
                    position: "absolute",
                    top: "0",
                    paddingTop: "40px",
                    width: "250px",
                    display: "none",
                    zIndex: "10",
                  }}
                >
                  <Box
                    className="menulist"
                    sx={{
                      position: "relative",
                      top: "0px",
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
                            // fontSize: "10px",
                            // fontWeight: "bold",
                            cursor:'pointer',
                            transition:'all 0.3s ease',
                            '&:hover':{
                              color:'#955E56'
                            },
                            
                           
                          }}>{item.title}</Typography>

                       
                     
                      // </ListItem>
                    ))}
                  </Box>
                </Box>
    <KeyboardArrowDownOutlinedIcon/>
    </a></li>
    <li className='list'><a href="#">Buy Now</a></li>

</ul>

</Box>


   </>
  )
}

export default MiniNavbar
