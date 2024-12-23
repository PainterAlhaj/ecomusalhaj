import React from 'react'
import '../Assets/Css/RoomSlider.css'
import card1 from '../Assets/img/image/card1.jpg';
import card2 from '../Assets/img/image/card2.jpg';
import card3 from '../Assets/img/image/card3.jpg';
import card4 from '../Assets/img/image/card4.jpg';
import card5 from '../Assets/img/image/card5.jpg';
import { LuArrowUpRight } from 'react-icons/lu';
import Slider from 'react-slick'


const CardSlider2 = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
            },
          },
       
        ],
      };
    
  return (
    <>
<div className="room-container">
    <div className="room-slider">
        <Slider {...settings}>
         
      
        <img src={card1} alt="" />
        <img src={card2} alt="" />
        <img src={card3} alt="" />
        <img src={card4} alt="" />
        <img src={card5} alt="" />
      


        </Slider>
    </div>
</div>

    </>
  )
}

export default CardSlider2
