import { Button, Checkbox, Divider, Drawer, FormControlLabel, Radio, Slider } from '@mui/material'
import React, { useState } from 'react'
import '../Assets/Css/AddCartDrawer.css'
import { IoMdClose } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import { PiTruckThin } from "react-icons/pi";
import { IoEyeOutline, IoSearchOutline } from "react-icons/io5";

import smallcard1 from '../Assets/img/image/smallcard1.jpg'
import smallcard2 from '../Assets/img/image/smallcard2.jpg'
import smallcard3 from '../Assets/img/image/smallcard3.jpg'
import SmallCardSlider from './SmallCardSlider';

const AddCartDrawer = ({openaddcartdrawer,setopenaddcartdrawer,
    addcartdrawerevent}) => {
     const searchdrawercard=[
    
    {
    id:1 ,
    img:smallcard1,
    title:'Cotton jersey top',
    newprice:'$8.00',
    oldprice:'$10.00',   
    },
    {
        id:2,
        img:smallcard2,
        title:'    Mini crossbody bag',
    
        newprice:'$18.00',
        oldprice:'$20.00',   
        },{
            id:3 ,
            img:smallcard3,
            title:'Oversized Printed T-shirt',
            newprice:'$30.00',
            oldprice:'$40.00',   
            },
         
    
    
            ]  
  return (
    <>
    
    
<Drawer className="addcart-drawer" disablePortal 

anchor="right" open={openaddcartdrawer} onClose={()=>{
    setopenaddcartdrawer(false)
}}
    
        >

<div className="addcart-drawerbox">
    <div className="addcart-header">
<div className="addcart-box">
    Shopping cart
    <div className="close-icon"  
    onClick={(()=>{
       setopenaddcartdrawer(false)
    })}
    ><IoMdClose /></div>
</div>
<Divider  className='divider'/>


<div className="addcart-input">

<Slider></Slider>
<p>Buy <span>$75.00</span> more to enjoy <span>Free Shipping</span></p>


</div>
<Divider  className='divider'/>

</div>
<div className="cart-list">

<div className="list-heading">
    <p>Your shop cart is empty</p>
</div>
<div className="explore-btn">
    <Button variant='contained ' className='btn'>Explore Products</Button>
</div>








    <SmallCardSlider/>
</div>
<div className="addcart-footer">
    <div className="footer-box">

<div className="addcart-todo">
<div className="todo-icon">
    <CiEdit/>
</div>
<div className="todo-icon">
    <RiDeleteBin7Line/>
</div><div className="todo-icon">
    <PiTruckThin/>
</div>
</div>
<div className="addcart-services">
    <div className="subtotal">
<p>Subtotal   </p>
<span>$0.00 USD</span>

    </div>
    <div className="taxes">
<p>Taxes and shipping calculated at checkout</p>
</div>
    <div className="addcart-agree">
    <FormControlLabel className='agreetext'
      control={<Radio 
        sx={{
            transform: "scale(0.9)",
            color:'#ebebeb' // Increase the size of the checkbox
          }}/>}
      label="I agree to the Terms and Conditions"
      sx={{
        "& .MuiTypography-root": {
          fontSize: "15px", 
          fontFamily:'Albert sans',
          fontWeight:'400'
        },
      }}
      
    />
    </div>
    <div className="cart-btn">
        <Button variant='text' className='btn'
         sx={{
           color:'black',
           border:'1px solid #ebebeb',

        }}>View Cart</Button>
        <Button className='btn'
         sx={{
            background:'#0E0E0E',
           color:'white',

        }}
        
        >Checkout</Button>

    </div>
</div>


    </div>

</div>
</div>

        </Drawer>
    
    </>
  )
}

export default AddCartDrawer
