import { Divider, Drawer } from '@mui/material'
import React, { useState } from 'react'
import '../Assets/Css/SearchDrawer.css'
import { IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

import smallcard1 from '../Assets/img/image/smallcard1.jpg'
import smallcard2 from '../Assets/img/image/smallcard2.jpg'
import smallcard3 from '../Assets/img/image/smallcard3.jpg'

const SearchDrawer = ({opensearchdrawer,setopensearchdrawer}) => {

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
   

<Drawer className="search-drawer" anchor="right" open={opensearchdrawer} onClose={() => setopensearchdrawer(false)}
        disablePortal
        >

<div className="search-drawerbox">
    <div className="search-header">
<div className="search-box">
    Search our site
    <div className="close-icon"  
    onClick={(()=>{
        setopensearchdrawer(false)
    })}
    ><IoMdClose /></div>
</div>


<div className="search-input">

<IoSearchOutline className='search-icon'/>
<input type="text" placeholder='Search' />


</div>
<Divider  className='divider'/>

</div>
<div className="link-box">

<div className="link-heading">
    <p>Quick link</p>
</div>
<ul>
    <li><a href="#">Fashion</a></li>
    <li><a href="#">Men</a></li>
    <li><a href="#">Women</a></li>
    <li><a href="#">Accesories</a></li>

</ul>

</div>


<p>Need Some Inspiration?</p>



<div className="small-cardbox">

    {searchdrawercard.map((card,index)=>{
        return (
<div className="small-card" key={index}>

<div className="small-card-img">
        <img src={card.img} alt="" />

    </div>
    <div className="small-card-content">
<a href="#">{card.title}</a>
<p><span>{card.oldprice}</span>{card.newprice}</p>

    </div>
</div>

        )
    })}
    </div>
</div>

        </Drawer>


   
   
   </>
  )
}

export default SearchDrawer
