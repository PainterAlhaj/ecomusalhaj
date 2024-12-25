import React from 'react'
import productmenu3 from  '../Assets/img/image/product-menu3.jpg'
import productmenu4 from  '../Assets/img/image/product-menu4.jpg'
import productmenu5 from  '../Assets/img/image/product-menu5.jpg'
import productmenu6 from  '../Assets/img/image/product-menu6.jpg'

import { Badge, Button,  } from "@mui/material";
import { LuArrowUpRight } from 'react-icons/lu';
// import '../Assets/Css/MenuSlider.css'
import Slider from 'react-slick';
const MenuSlider = () => {
    const settings={
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          draggable: true,
          arrows:false,
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
      </div>
      
      </Slider>
   </div>

  )
}

export default MenuSlider
