import React, { useState, useEffect } from 'react';
import '../Assets/Css/Hero.css';
import { Box, Button, Typography } from '@mui/material';
import heroimage1 from '../Assets/img/image/heroimage.jpg';
import heroimage2 from '../Assets/img/image/heroimage2.jpg';
import heroimage3 from '../Assets/img/image/heroimage3.jpg';
import { FaAngleRight } from "react-icons/fa6";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showcontent, setShowContent] = useState({ title: false, text: false, button: false });

  // Trigger animation for the first slide on initial render
  useEffect(() => {
    setTimeout(() => setShowContent({ title: true, text: false, button: false }), 300); // Title appears
    setTimeout(() => setShowContent({ title: true, text: true, button: false }), 400); // Text appears
    setTimeout(() => setShowContent({ title: true, text: true, button: true }), 500); // Button appears
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    afterChange: (current) => {
      if(current!==activeSlide){
      setActiveSlide(current);
      setShowContent({ title: false, text: false, button: false }); // Reset content visibility
      setTimeout(() => setShowContent({ title: true, text: false, button: false }), 300); // Title appears
      setTimeout(() => setShowContent({ title: true, text: true, button: false }), 400); // Text appears
      setTimeout(() => setShowContent({ title: true, text: true, button: true }), 500); // Button appears
    }},
  
  };

  const slides = [
    {
      id: 0,
      title: "Modern Dining \n Furniture.",
      image: heroimage1,
    },
    {
      id: 1,
      title: "Relaxing \n Room",
      image: heroimage2,
    },
    {
      id: 2,
      title: "Luxurious \n Living Room",
      image: heroimage3,
    },
  ];

  return (
    <Box className="hero-section">
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.id} className="slider-box">
            <div className="main">
              <Box className={`left ${slide.id === 1 ? 'second' : ''} ${slide.id === 2 ? 'third' : ''}`}>
                <Box className="content">
                  <h1  className={`title ${showcontent.title && activeSlide === slide.id ? "visible" : "hidden"}`}>
                    {slide.title}
                  </h1>
                  <Typography variant="h6" className={`text ${showcontent.text && activeSlide === slide.id ? "visible" : "hidden"}`}>
                    Special Offer You Can't Miss
                  </Typography>
                  <Button variant="contained" LinkComponent={'a'} className={`btn ${showcontent.button && activeSlide === slide.id ? "visible" : "hidden"}`}>
                    Shop collection <FaAngleRight style={{ marginLeft: '10px', fontSize: "14px" }} />
                  </Button>
                </Box>
              </Box>
              <Box className="right">
                <img src={slide.image} alt="" />
              </Box>
            </div>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;
