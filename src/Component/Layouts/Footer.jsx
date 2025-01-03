import { Accordion, AccordionDetails, AccordionSummary,Box, Button, styled,Typography, useMediaQuery , List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Menu,} from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../Assets/Css/Footer.css'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { IoIosAdd } from "react-icons/io";
import flag1 from "../../Assets/img/image/flag1.svg";
import flag2 from "../../Assets/img/image/flag2.svg";
import flag3 from "../../Assets/img/image/flag3.svg";
import flag4 from "../../Assets/img/image/flag4.svg";

const Footer = () => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl1, setAnchorEl1] = useState(null); // State for first menu
    const [anchorEl2, setAnchorEl2] = useState(null); // State for second menu
    const [selectedIndex1, setSelectedIndex1] = useState(1);
    const [selectedIndex2, setSelectedIndex2] = useState(0);
  
    const options3 = [
      {
        id: "1",
        text: "EUR | Germany",
        img: flag1,
      },
      {
        id: "2",
        text: "EUR",
        img: flag2,
      },
      {
        id: "3",
        text: "USD | United States",
        img: flag3,
      },
      {
        id: "4",
        text: "VND | Vietnam",
        img: flag4,
      },
    ];
  
    const options2 = ["English",'اردو','简体中文','العربية'];
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    const Footerbox1=styled(Box)(()=>({
        // padding:"20px 20px",
        // background:'#F1F5F4',
        // gap:'20px'
    }))

    const Footerbox2=styled(Box)(()=>({

      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      gap:'30px',
      padding:'40px 20px',
      

    }))

    const Footerbox3=styled(Box)(()=>({
   
    }))


  return (
    <>


    <footer>
<Footerbox1 className='footerbox1'>
       
       <div className="main-footer">
       <div className='footer-left'>
       <Box  className='ecomus'
        sx={{
      display:'flex',
          
          flexDirection:'column',
          // justifyContent:'center',
          alignItems:'flex-start',
          // border:'2px solid black',
            flex:'1',
           
            // height:{sm:'150px !important',md:'300px !important'} ,
           


        }}>


<img src="https://ecomusnext-themesflat.vercel.app/images/logo/logo.svg" className='ecomus-image' alt="" />
<p  
className='same active'>Address: 1234 Fashion Street, Suite 567<br/>
New York, NY 10001</p>
<p className='same'>Email: info@fashionshop.com</p>
<p className='same'>Phone: (212) 555-1234</p>

<a href="#"
style={{
  textDecoration:'none',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  marginTop:'20px',
  color:'black',
  fontSize:'14px',
  paddingBottom:'10px',
  borderBottom:'1px solid black'
}}> Get direction


<ArrowOutwardRoundedIcon
    sx={{
      ml:"10px",
      fontSize:'14px'
    }}/>
</a>




<Box sx={{
  display: 'flex',
  justifyContent:'center',
  alignItems:'center',
  // border:'2px solid',
  padding:'20px 0'
}}>
  
  <Link 
    to="https://www.facebook.com" 
    target="_blank"
    style={{
      textDecoration: 'none', 
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textDecoration: 'none', 
      borderRadius:'50%',
      padding:'5px 5px',
      border:'1px solid black',
      marginRight:'10px' ,
    }}
  >
    <FacebookOutlinedIcon sx={{
      color: 'black', 
      '&:hover': {
        color: '#5FCBC4',  
        cursor: 'pointer',  
      },
    }} />
  </Link>
  <Link 
    to="https://www.instagram.com" 
    target="_blank"
    style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textDecoration: 'none', 
      borderRadius:'50%',
      padding:'5px 5px',
      border:'1px solid black',
      marginRight:'10px'
    }}
  >
    <InstagramIcon sx={{
      color: 'black', 
      // fontSize:'25px', 
      '&:hover': {
        color: '#5FCBC4',  
        cursor: 'pointer',
      },
    }} />
  </Link>
  <Link 
    to="https://www.twitter.com" 
    target="_blank"
    style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textDecoration: 'none', 
      borderRadius:'50%',
      padding:'5px 5px',
      border:'1px solid black',
      marginRight:'10px' // Link ka underline hata diya gaya
    }}
  >
    <TwitterIcon sx={{
      color: 'black',
      // fontSize:'25px',  // Default color black
      '&:hover': {
        color: '#5FCBC4',  // Hover par color #5FCBC4
        cursor: 'pointer',
      },
    }} />
  </Link>
  <Link 
    to="https://www.google.com" 
    target="_blank"
    style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textDecoration: 'none', 
      borderRadius:'50%',
      padding:'5px 5px',
      border:'1px solid black',
      marginRight:'10px',
    }}
  >
    <GoogleIcon sx={{
      color: 'black', 
      // fontSize:'25px', 
      '&:hover': {
        color: '#5FCBC4',  
        cursor: 'pointer',
      },
    }} />
  </Link>
  <Link 
    to="https://www.facebook.com" 
    target="_blank"
    style={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textDecoration: 'none', 
      borderRadius:'50%',
      padding:'5px 5px',
      border:'1px solid black'
      // marginRight:'10px' // Link ka underline hata diya gaya
    }}
  >
    <FacebookOutlinedIcon sx={{
      color: 'black', 
      // fontSize:'30px', // Default color black
      '&:hover': {
        color: '#5FCBC4',  // Hover par color #5FCBC4
        cursor: 'pointer',  // Hover par pointer cursor
      },
    }} />
  </Link>
</Box>


<div>

</div>

        </Box>
        <Box className='help'
sx={{
  display:{xs:'none',sm:'flex'},
          
  flexDirection:'column',
  justifyContent:'flex-start',
  // alignItems:'center',
  // border:'2px solid black',

    flex:'1',
            


}}>
<h6 className='footer-title'>Help</h6>
<ul className='list-cont'>
  <li><a href="#">Privacy Policy</a></li>
  <li><a href="#">Returns  + exchanges</a></li>
  <li><a href="#">Shippings</a></li>
  <li><a href="#">Terms & Conditions</a></li>
  <li><a href="#">FAQ's</a></li>
  <li><a href="#">Compare</a></li>
  <li><a href="#">My Wishlist</a></li>

</ul>


</Box>
       </div>
   <div className="footer-right">
   <Box
sx={{
  display:{xs:'none',sm:'flex'},
          
  flexDirection:'column',
  justifyContent:'flex-start',
  // alignItems:'center',
  // border:'2px solid black',

    flex:'1',

}}>
<h6 className='footer-title'>About Us</h6>
<ul className='list-cont'>
  <li><a href="#">Our Story</a></li>
  <li><a href="#">Visit Our Store</a></li>
  <li><a href="#">Contact Us</a></li>
  <li><a href="#">About Us</a></li>

</ul>


</Box>
<Box
sx={{
  display:{xs:'none',sm:'flex'},
          position:'relative',
  flexDirection:'column',
  justifyContent:'flex-start',


    flex:'1',
    // height:{sm:'150px',md:'300px'},
           

}}>
  <h6 className='footer-title email'>Sign Up for Email</h6>
  <p className='same'>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
  <Box  className='input-box'>
    <input type="text" placeholder='Enter Your Email...' 
    className='send-message'/>
    <Button variant='contained' className='btn'>Subscribe <ArrowOutwardRoundedIcon
    sx={{
      ml:"10px",
      fontSize:'20px'
    }}/></Button>

  </Box>


  <div className="footer-dropdown" style={{display:'flex',marginTop:'5%',padding:'0 !important',}}>
  <List component="nav" aria-label="Device settings"
  sx={{
    // border:'1px solid black',
    padding:'0'
  }}>
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
                    maxWidth: "101px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    fontFamily: "Albert sans",
                    paddingLeft:'0'

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
                        src={options3[selectedIndex1].img}
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
                  position:'absolute',
                  left:'-30%',
                  fontFamily: "Albert sans",
                  height:'400px'
                }}
              >
                {options3.map((option, index) => (
                  <MenuItem 
                    sx={{
                      fontFamily: "Albert sans",
                      width:'280px',
                      
                    }}
                    key={option}
                    selected={index === selectedIndex1}
                    onClick={(event) => handleMenuItemClick1(event, index)}
                  >
                    <img src={option.img} alt="" 
                     style={{
                      height: "15px",
                      width: "15px",
                      // border:'1px solid black'
                    }}/>
                    <span
                    style={{
                      marginLeft:'10px',
                      fontSize:'14px',
                      fontFamily:'Albert sans',
                    }}>{option.text}</span>
                  </MenuItem>
                ))}
              </Menu>

              {/* Second Menu */}
              <List component="nav" aria-label="Language settings"
               sx={{
                // border:'1px solid black',
                padding:'0'
              }}>
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
                sx={{
                  padding: "0",
                  margin: "0",
                  fontFamily: "Albert sans",
                  position:'absolute',
                  top:'15%',
                  left:'25%',
                  height:'400px'


                }}
              >
                {options2.map((option, index) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Albert sans",
                    paddingX:' 20px',
                    py:'2px',
                    fontSize:'14px'
                    }}
                    key={option}
                    selected={index === selectedIndex2}
                    onClick={(event) => handleMenuItemClick2(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
              </div>
</Box>
    </div>   

</div>
    </Footerbox1>

   






<Box className='accordion-container'
sx={{
  display:{xs:'block',sm:'none',

    color:'#777777',
    // marginTop:'20px',


    '@media (max-width:767px)':{
      display:'block',
    }
  }
}}>


<Accordion  className='accordion'
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          boxShadow: 'none',
          margin:'0 !important',
      "&:before": {
          display: "none", // डिफ़ॉल्ट बॉर्डर हटाने के लिए
        },
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            display:'flex !important',
          justifyContent:'flex-start !important',
            alignItems:'flex-start !important'
          }}
        >
          <h6  style={{
            fontFamily:'Albert sans',
            fontSize:'18px',
            fontWeight:'500',
            
           }}>
            Help
          </h6>
          {/* <KeyboardArrowDownOutlinedIcon sx={{ ml: 'auto' }} /> */}
          <IoIosAdd style={{ marginLeft: 'auto',fontSize:'24px' ,
            display:'flex !important',
            justifyContent:'flex-start !important',
            alignItems:'flex-start !important'
          }} />

        </AccordionSummary>
        <AccordionDetails className='accordiondetails-help'>
        <ul>
          <li><a href="#">
          Privacy Policy

            </a></li>
          <li><a href="#">
Returns + Exchanges
</a></li>
          <li><a href="#">
Shipping
            </a></li>
          <li><a href="#">
Terms & Conditions
</a></li>
          <li><a href="#">
FAQ’s
            </a></li>
          <li><a href="#">
Compare
            </a></li>
          <li><a href="#">
My Wishlist
            </a></li>

        </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className='accordion'
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          boxShadow: 'none',
          margin:'0 !important',
          "&:before": {
          display: "none", 
        },
        }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          
          sx={{
            border:'none !important'
          
          }}
        >
        <h6  style={{
            fontFamily:'Albert sans',
            fontSize:'18px',
            fontWeight:'500'
           }}>
            About us
          </h6>
          {/* <KeyboardArrowDownOutlinedIcon sx={{ ml: 'auto' }} /> */}
          <IoIosAdd style={{ marginLeft: 'auto',fontSize:'24px' ,
            display:'flex !important',
            justifyContent:'flex-start !important',
            alignItems:'flex-start !important'
          }} />

        </AccordionSummary>

        <AccordionDetails className='accordiondetails-help'>
        <ul>
          <li><a href="#">
          Our Story

            </a></li>
          <li><a href="#">
          Visit Our Store
</a></li>
          <li><a href="#">
          Contact Us
            </a></li>
          <li><a href="#">
          About Us
</a></li>
         

        </ul>
        </AccordionDetails>

       
      </Accordion>

      <Accordion className='accordion'
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          boxShadow: 'none',
          margin:'0 !important',
          "&:before": {
          display: "none", 
        },
    
        }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          sx={{
           
          }}
        >
          <h6  style={{
            fontFamily:'Albert sans',
            fontSize:'18px',
            fontWeight:'500'
           }}>
            Sign up for email
          </h6>


          
          <IoIosAdd style={{ marginLeft: 'auto',fontSize:'24px' ,
            display:'flex !important',
            justifyContent:'flex-start !important',
            alignItems:'flex-start !important'
          }} />
        </AccordionSummary>
        <AccordionDetails>
        <p className='accordion-same'>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
  <Box  className='accordion-input-box'>
    <input type="accordion-text" placeholder='Enter Your Email...' 
    className='accordion-send-message'/>
    <Button variant='contained' className='accordion-btn'>Subscribe <ArrowOutwardRoundedIcon
    sx={{
      ml:"10px",
      fontSize:'20px',
    
      '@media (max-width:599px)':{
        ml:'5px',
      fontSize:'16px',

      },
    }}/></Button>
  </Box>
        </AccordionDetails>
      </Accordion>

      </Box>

<div className="footer3-container">
    <Footerbox3 className='footerbox3'
    
    sx={{
     
   
    
    }}
    >
      <p 
      style={{
        display:'flex !important',
color:'#777777',
textAlign:'center',
fontSize:'14px',
fontFamily: "Albert sans",
alignItems:'center  !important',
justifyContent:'center !important',



      }}
      > © 2024 Ecomus Store. All Rights Reserved</p>

      <div className="img-cont"
      style={{
       
       
      }}>
        <img src="https://ecomusnext-themesflat.vercel.app/images/payments/visa.png" alt="" />
        <img src="https://ecomusnext-themesflat.vercel.app/images/payments/img-1.png" alt="" />
        <img src="https://ecomusnext-themesflat.vercel.app/images/payments/img-2.png" alt="" />
        <img src="https://ecomusnext-themesflat.vercel.app/images/payments/img-3.png" alt="" />
        <img src="https://ecomusnext-themesflat.vercel.app/images/payments/img-4.png" alt="" />

      </div>
    </Footerbox3>
   </div>
   </footer>
    </>
  )
}

export default Footer
