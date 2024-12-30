import { Box, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

import React, { useState } from 'react';
import Slider from 'react-slick';
import product1 from '../Assets/img/image/product1.jpg';
import product2 from '../Assets/img/image/product2.jpg';
import product3 from '../Assets/img/image/product3.jpg';
import product4 from '../Assets/img/image/product4.jpg';
import product5 from '../Assets/img/image/product5.jpg';
import product6 from '../Assets/img/image/product6.jpg';
import product7 from '../Assets/img/image/product7.jpg';
import product8 from '../Assets/img/image/product8.jpg';
import { GrFormNext } from "react-icons/gr";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { GrFormPrevious } from "react-icons/gr";
import { LuArrowUpRight } from 'react-icons/lu';
import { RiShoppingBag2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

import { TbArrowsCross } from "react-icons/tb";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Assets/Css/ProductSlider.css';
// import '../Assets/Css/CardDesign.css'


// Custom arrow components
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

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  
    // After the slide changes, update the currentSlide
    const handleAfterChange = (index) => {
      setCurrentSlide(index);
    };
  
    // Debugging currentSlide value
    // React.useEffect(() => {
    //   console.log('Current Slide:', currentSlide); 
    // }, [currentSlide]);
  
  const allCards = [
    { id: 1, img: product1, caption:'AJ Wall Sconce',price:'$982.00'},
    { id: 2, img: product2, caption:'Brasilia Long Chair',price:'$982.00' },
    { id: 3, img: product3, caption:'Lina Swivel Chair',price:'$3600.00' },
    { id: 4, img: product4, caption:'MR Chaise',price:'$1999.00' },
    { id: 5, img: product5,caption:'MG 501 Cuba Lounge Chair,Paper Cord',price:'$1290.00' },
    { id: 4, img: product6, caption:'Scissor Chair',price:'$2755.00' },
    { id: 4, img: product7, caption:'Soborg Model 3052 Dinner Chsir',price:'$1356.00' },
    { id: 4, img: product8, caption:'Lina Swivel Chair',price:'$3600.00' },

  ];
  const totalSlides = 4; 



  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <NextArrow isDisabled={currentSlide===totalSlides} />
    ),
    prevArrow: (
      <PrevArrow isDisabled={currentSlide === 0} />
    ),
    afterChange: handleAfterChange,

    
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
   
    ],
  };

  return (
    <>
      <Box className="product-container">
        
        <Box className="product-slider">
        <div className="product-title">
      <span>Trending Now</span>
      <Button variant='text' className='btn'>View All</Button>

      </div>
          <Slider {...settings}>
            {allCards.map((card) => (
              <Card className="card" key={card.id}>
                <CardMedia
                  className="card-img"
                  image={card.img}
                  alt={card.btn}
                />
                <CardActions className='card-action'>

<div className="action-icons">
<div className="action-icon show">
  <RiShoppingBag2Line/>
</div>
<div className="action-icon hide">
  <MdFavoriteBorder />
</div>
<div className="action-icon hide">
  <TbArrowsCross />
</div>
<div className="action-icon show">
  <IoEyeOutline />
</div>

</div>


                </CardActions>
               <CardContent className='card-content'>
                <a>{card.caption}</a>
                <span>{card.price}</span>
               </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );

}
export default ProductSlider;
