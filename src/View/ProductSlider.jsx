import { Box, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import product1 from '../Assets/img/image/product1.jpg';
import product2 from '../Assets/img/image/product2.jpg';
import product3 from '../Assets/img/image/product3.jpg';
import product4 from '../Assets/img/image/product4.jpg';
import product5 from '../Assets/img/image/product5.jpg';
import product6 from '../Assets/img/image/product6.jpg';
import product7 from '../Assets/img/image/product7.jpg';
import product8 from '../Assets/img/image/product8.jpg';
import productone from '../Assets/img/image/productone.jpg';
// import producttwo from '../Assets/img/image/producttwo.jpg';
import productthree from '../Assets/img/image/productthree.jpg';
import productfour from '../Assets/img/image/productfour.jpg';
import productfive from '../Assets/img/image/productfive.jpg';
import productsix from '../Assets/img/image/productsix.jpg';
import productseven from '../Assets/img/image/productseven.jpg';
import producteight from '../Assets/img/image/producteight.jpg';





import { GrFormNext, GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { GrFormPrevious } from "react-icons/gr";
import { LuArrowUpRight } from 'react-icons/lu';
import { RiShoppingBag2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

import { TbArrowsCross, TbBackground } from "react-icons/tb";

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
  const [firstover,setfirstover]=useState(false)
  const [secondover,setsecondover]=useState(false)
  const [thirdover,setthirdover]=useState(false)
  const [fourover,setfourover]=useState(false)
  const [fiveover,setfiveover]=useState(false)
  const [sixover,setsixover]=useState(false)
  const [sevenover,setsevenover]=useState(false)
  const [eightover,seteightover]=useState(false)


  
    // After the slide changes, update the currentSlide
    const handleAfterChange = (index) => {
      setCurrentSlide(index);
    };
  
    // Debugging currentSlide value
    // React.useEffect(() => {
    //   console.log('Current Slide:', currentSlide); 
    // }, [currentSlide]);
  
  const allCards = [
    { id: 1,
       img: firstover?product1:productone,
       caption:'AJ Wall Sconce',price:'$982.00',img2:product2},
    { id: 2,
      // img: secondover?product2:producttwo,
      img:product2,
      caption:'Brasilia Long Chair',price:'$982.00' },
    { id: 3, 
      img: thirdover?product3:productthree,
       caption:'Lina Swivel Chair',price:'$3600.00' },
    { id: 4,
       img: fourover?product4:productfour,
       caption:'MR Chaise',price:'$1999.00' },
    { id: 5, 
      img: fiveover?product5:productfive,
      caption:'MG 501 Cuba Lounge Chair,Paper Cord',price:'$1290.00' },
    { id: 4,
       img: sixover?product6:productsix,
       caption:'Scissor Chair',price:'$2755.00' },
    { id: 4, 
      img: sevenover?product7:productseven,
       caption:'Soborg Model 3052 Dinner Chsir',price:'$1356.00' },
    { id: 4, 
      img: eightover?product8:producteight,
       caption:'Lina Swivel Chair',price:'$3600.00' },

  ];
  const totalSlides = 4; 

  const [currentIndex, setCurrentIndex] = useState(0);

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

  const sliderRef = useRef(null);
  const nextSlide = () => {

      sliderRef.current.slickNext(); // Index ko increment karne ke liye

  };
  const prevSlide = () => {
    sliderRef.current.slickPrev(); // Index ko increment karne ke liye
  };

  return (
    <>
      <Box className="product-container">
        
        <Box className="product-slider">
        <div className="product-title">
      <span>Trending Now</span>
      <div className="product-arrow">
      <GrLinkPrevious  className='arrow-icon'
        onClick={prevSlide}
        />

      <Button variant='text' className='btn'>View All</Button>
      <GrLinkNext   className='arrow-icon' onClick={nextSlide}/>

      </div>
      </div>
          <Slider {...settings}  ref={sliderRef}>
            {allCards.map((card,index) => (
              <Card className="card" key={index}>
                <CardMedia
                  className="card-img"
                  image={
                  card.img
                  }
                  alt={card.btn}
                />
                <CardActions className='card-action'>

<div className="action-icons">
<div className="action-icon show one">
  <RiShoppingBag2Line/>
</div>
<div className="action-icon hide two">
  <MdFavoriteBorder />
</div>
<div className="action-icon hide three">
  <TbArrowsCross />
</div>
<div className="action-icon show four">
  <IoEyeOutline />
</div>

</div>


                </CardActions>
               <CardContent className='card-content'>
                <a>{card.caption}</a>
                <span>{card.price}</span>
           
<div className="imagechange">
<div className='first'
onMouseOver={(()=>{
  console.log("moiuse over",index)
  if(index===0){
    setfirstover(true)

  }
  if(index===1){
    setsecondover(true)

  } if(index===2){
    setthirdover(true)

  } if(index===3){
    setfourover(true)

  } if(index===4){
    setfiveover(true)

  } if(index===5){
    setsixover(true)

  } if(index===6){
    setsevenover(true)

  }
  if(index===7){
    seteightover(true)
  }
  
  
})}
></div>
<div className='second'

onMouseOver={(()=>{
  console.log("moiuse over",index)
  if(index===0){
    setfirstover(false)

  }
  if(index===1){
    setsecondover(false)

  } if(index===2){
    setthirdover(false)

  } if(index===3){
    setfourover(false)

  } if(index===4){
    setfiveover(false)

  } if(index===5){
    setsixover(false)

  } if(index===6){
    setsevenover(false)

  }
  if(index===7){
    seteightover(false)
  }
  
  
})}
></div>
</div>




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
