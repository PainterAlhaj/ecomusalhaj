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
import '../Assets/Css/CardSlider.css';
// import '../Assets/Css/CardDesign.css'

const CardSlider = () => {
  const allCards = [
    { id: 1, img: card1, btn: 'Furniture' },
    { id: 2, img: card2, btn: 'Lighting' },
    { id: 3, img: card3, btn: 'Outdoor' },
    { id: 4, img: card4, btn: 'Kitchen' },
    { id: 5, img: card5, btn: 'Decor' },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
        },
      },
   
    ],
  };

  return (
    <>
      <Box className="card-container">
        <span>Shop by categories</span>
        <Box className="slider-container">
          <Slider {...settings}>
            {allCards.map((card) => (
              <Card className="card" key={card.id}>
                <CardMedia
                  className="card-img"
                  image={card.img}
                  alt={card.btn}
                />
                <CardActions className="card-action">
                  <Button
                    className="btn"
                    variant="contained"
                    disableRipple
                    disableElevation
                  >
                    {card.btn} <LuArrowUpRight className="arrow-up" />
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );

}
export default CardSlider;
