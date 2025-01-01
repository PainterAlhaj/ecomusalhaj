import { Box, Button, Card, CardActions, CardMedia } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import card1 from '../Assets/img/image/card1.jpg';
import card2 from '../Assets/img/image/card2.jpg';
import card3 from '../Assets/img/image/card3.jpg';
import card4 from '../Assets/img/image/card4.jpg';
import card5 from '../Assets/img/image/card5.jpg';
import { LuArrowUpRight } from 'react-icons/lu';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Assets/Css/SmallCardSlider.css';
import smallcard1 from '../Assets/img/image/smallcard1.jpg'
import smallcard2 from '../Assets/img/image/smallcard2.jpg'
import smallcard3 from '../Assets/img/image/smallcard3.jpg'
import { IoEyeOutline } from "react-icons/io5";

// import '../Assets/Css/CardDesign.css'

const SmallCardSlider = () => {
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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows:false,
    // responsive: [
    //   {
    //     breakpoint: 770,
    //     settings: {
    //       slidesToShow: 2.4,
    //       slidesToScroll: 1,
    //     },
    //   },
   
    // ],
  };

  return (
    <>
      <Box className="smallcardslider-container">
        <span>You may also like</span>
        <Box className="smallslider-container">
        <div className="small-cardbox">
          <Slider {...settings}>
          


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
<div className="small-card-icon">
    <IoEyeOutline  className='eye-icon'/>
</div>
</div>

    )
})}
          </Slider>
</div>

        </Box>
      </Box>
    </>
  );

}
export default SmallCardSlider;
