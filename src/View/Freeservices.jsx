import React from 'react'
import '../Assets/Css/FreeServices.css'
import { GrCube } from "react-icons/gr";
import { GoCreditCard } from "react-icons/go";
import { IoMdReturnLeft } from "react-icons/io";
import { FaHeadphonesAlt } from "react-icons/fa";
import Slider from 'react-slick';
const FreeServices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              }
            ]
      };
    
  return (
  <>
  <div className="freeservices-container">
    <div className="freeservices-slider">
        <Slider {...settings}> 
        <div className="freeservices-slide">
            <div className="icon"><GrCube/></div>
            <div className="text">
                <h6>Free Shipping</h6>
                <p>Free shipping over order $120</p>
            </div>
        </div>
        <div className="freeservices-slide">
            <div className="icon"><GoCreditCard/></div>
            <div className="text">
                <h6>Flexible Payment</h6>
                <p>Pay with Multiple Credit cards</p>
            </div>
        </div> 
        <div className="freeservices-slide">
            <div className="icon"><IoMdReturnLeft/></div>
            <div className="text">
                <h6>14 Days Return</h6>
                <p>Within 30 days for an exchange</p>
            </div>
        </div>
         <div className="freeservices-slide">
            <div className="icon"><FaHeadphonesAlt/></div>
            <div className="text">
                <h6>Premium Support</h6>
                <p>Outstanding premium support</p>
            </div>
        </div>
        <div className="freeservices-slide">
            <div className="icon"><GrCube/></div>
            <div className="text">
                <h6>Free Shipping</h6>
                <p>Free shipping over order $120</p>
            </div>
        </div>
        <div className="freeservices-slide">
            <div className="icon"><GoCreditCard/></div>
            <div className="text">
                <h6>Flexible Payment</h6>
                <p>Pay with Multiple Credit cards</p>
            </div>
        </div> 
        <div className="freeservices-slide">
            <div className="icon"><IoMdReturnLeft/></div>
            <div className="text">
                <h6>14 Days Return</h6>
                <p>Within 30 days for an exchange</p>
            </div>
        </div>
         <div className="freeservices-slide">
            <div className="icon"><FaHeadphonesAlt/></div>
            <div className="text">
                <h6>Premium Support</h6>
                <p>Outstanding premium support</p>
            </div>
        </div>
        </Slider>
    </div>
  </div>
  </>
  )
}

export default FreeServices
