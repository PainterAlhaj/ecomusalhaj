import React, { useState } from 'react'
import productmenu3 from  '../Assets/img/image/product-menu3.jpg'
import productmenu4 from  '../Assets/img/image/product-menu4.jpg'
import productmenu5 from  '../Assets/img/image/product-menu5.jpg'
import productmenu6 from  '../Assets/img/image/product-menu6.jpg'

import { Badge, Button,  } from "@mui/material";
import { GrFormPrevious } from "react-icons/gr";
import { LuArrowUpRight } from 'react-icons/lu';
import { GrFormNext } from "react-icons/gr";
import Slider from 'react-slick';


// import '../Assets/Css/MenuSlider.css'

const NextArrow = ({ onClick, isDisabled }) => (
  <div
    className={`slick-next custom-arrow ${isDisabled ? 'disabled' : ''}`}
    onClick={!isDisabled ? onClick : undefined}
  >
    <GrFormNext/>
  </div>
);

const PrevArrow = ({ onClick, isDisabled }) => (
  <div
    className={`slick-prev custom-arrow ${isDisabled ? 'disabled' : ''}`}
    onClick={!isDisabled ? onClick : undefined}
  >
    <GrFormPrevious/>
  </div>
);


const MenuSlider = () => {
const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides=2
  
    // After the slide changes, update the currentSlide
    const handleAfterChange = (index) => {
      setCurrentSlide(index);
    };



    const settings={
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
          arrows: true,
    nextArrow: (
      <NextArrow isDisabled={currentSlide===totalSlides} />
    ),
    prevArrow: (
      <PrevArrow isDisabled={currentSlide === 0} />
    ),
    afterChange: handleAfterChange,

        }
  return (
   <div className="productmenu-slider">
    <Slider {...settings}>
 <div className="menu-img">
          <img src={productmenu4} alt="" />
           <Button
                              className="btn"
                              variant="contained"
                              disableRipple
                              disableElevation
                            >
                              Men <LuArrowUpRight className="arrow-up" />
                            </Button>

            <div className="productmenu-content">
              <a href="#">Ribbed Tank Top</a>

<span>$16.95</span>           
   </div>  

      </div>







      <div className="menu-img">
          <img src={productmenu5} alt="" />
           <Button
                              className="btn"
                              variant="contained"
                              disableRipple
                              disableElevation
                            >
                              Men <LuArrowUpRight className="arrow-up" />
                            </Button>

                            <div className="productmenu-content">
              <a href="#">Ribbed Tank Top</a>

<span>$16.95</span>           
   </div>  


      </div>

      <div className="menu-img">
          <img src={productmenu6} alt="" />
           <Button
                              className="btn"
                              variant="contained"
                              disableRipple
                              disableElevation
                            >
                              Men <LuArrowUpRight className="arrow-up" />
                            </Button>
                            <div className="productmenu-content">
              <a href="#">Ribbed Tank Top</a>

<span>$16.95</span>           
   </div>  

      </div>
      <div className="menu-img">
          <img src={productmenu3} alt="" />
           <Button
                              className="btn"
                              variant="contained"
                              disableRipple
                              disableElevation
                            >
                              Men <LuArrowUpRight className="arrow-up" />
                            </Button>

                            <div className="productmenu-content">
              <a href="#">Ribbed Tank Top</a>

<span>$16.95</span>           
   </div>  

      </div>
      
      </Slider>
   </div>

  )
}

export default MenuSlider
