import { Accordion, AccordionDetails, AccordionSummary,Box, Button, styled,Typography, useMediaQuery } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../Assets/Css/Footer.css'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

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


    
<Footerbox1 className='footerbox1'

   >
       
       <div className="main-footer">
       <div className='footer-left'>
       <Box  className='ecomus'
        sx={{
      display:{xs:'none',sm:'flex'},
          
          flexDirection:'column',
          // justifyContent:'center',
          alignItems:'flex-start',
          // border:'2px solid black',
            flex:'1',
           
            height:{sm:'150px',md:'300px'},
           


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
  fontFamily:'Arial, Helvetica, sans-serif',
  fontSize:'15px',
  paddingBottom:'10px',
  borderBottom:'1px solid black'
}}> Get direction


<ArrowOutwardRoundedIcon
    sx={{
      ml:"10px",
      fontSize:'18px'
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
      marginRight:'10px' 
    }}
  >
    <FacebookOutlinedIcon sx={{
      color: 'black', 
      // fontSize:'25px', 
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
    height:{sm:'150px',md:'300px'},
            


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
          
  flexDirection:'column',
  justifyContent:'flex-start',


    flex:'1',
    height:{sm:'150px',md:'300px'},
           

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
</Box>
    </div>   

</div>
    </Footerbox1>

   






{/* <Box
sx={{
  display:{xs:'block',sm:'none',
    width:'80%',
    // border:'2px solid',
    color:'#777777',

    margin:'0 auto',
    '@media (max-width:760px)':{
      display:'block'
    }
  }
}}>


<Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        sx={{
          width: '100%',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            borderBottom: '1px solid grey',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            About
          </Typography>
          <KeyboardArrowDownOutlinedIcon sx={{ ml: 'auto' }} />
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6" fontSize="30px" color="#222222" letterSpacing={4}>
            Ulti<span style={{ fontWeight: 'bold' }}>kart</span>
          </Typography>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        sx={{
          width: '100%',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          sx={{
            borderBottom: '1px solid grey',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Store Information
          </Typography>
          <KeyboardArrowDownOutlinedIcon sx={{ ml: 'auto' }} />
        </AccordionSummary>
        <AccordionDetails>
          <p>Multikart Demo Store, Demo store India 345-659</p>
          <p>Call Us: 123-456-7898</p>
          <p>Email Us: Support@Fiot.com</p>
          <p>Fax: 123456</p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        sx={{
          width: '100%',
          boxShadow: 'none',
        }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          sx={{
            borderBottom: '1px solid grey',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            My Account
          </Typography>
          <KeyboardArrowDownOutlinedIcon sx={{ ml: 'auto' }} />
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              paddingTop: '20px',
            }}
          >
            <Box>Mens</Box>
            <Box>Womens</Box>
            <Box>Clothing</Box>
            <Box>Accessories</Box>
            <Box>Featured</Box>
            <Box>Service</Box>
            <Box>Cart</Box>
            <Box>My Order</Box>
            <Box>FAQ</Box>
            <Box>New Product</Box>
            <Box>Featured Product</Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      </Box>

 */}
    <Footerbox3 className='footerbox3'
    
    sx={{
     
      flexDirection:{xs:'column',sm:'row'},
     gap:{xs:'5px',sm:'10px'},
    
    }}
    >
      <p style={{
color:'#777777',
textAlign:'center',
fontSize:'15px',
marginLeft:'-50px',
marginBottom:'20px',
// border:'2px solid black',
fontFamily:'Arial, Helvetica, sans-serif',
'@media (max-width:770px)':{
marginBottom:'50px'
      
      },

      }}> @2023-24 themeforest powered by pixelstrap</p>

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
   
    </>
  )
}

export default Footer
