import React from 'react'
import '../Assets/Css/RoomSlider.css'
import bigcard1 from '../Assets/img/image/bigcard1.jpg'
import bigcard2 from '../Assets/img/image/bigcard2.jpg'
import bigcard3 from '../Assets/img/image/bigcard3.jpg'
import Slider from 'react-slick'


const RoomSlider = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1.4,
        slidesToScroll: 1
      };
  return (
    <>
<div className="room-container">
    <div className="room-slider">
        <Slider {...settings}>
         
      
        <img src={bigcard1} alt="" />
        <img src={bigcard2} alt="" />
        <img src={bigcard3} alt="" />


        </Slider>
    </div>
</div>

    </>
  )
}

export default RoomSlider
