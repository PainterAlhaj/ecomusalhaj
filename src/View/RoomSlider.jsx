import React, { useState } from 'react';
import '../Assets/Css/RoomSlider.css';
import bigcard1 from '../Assets/img/image/bigcard1.jpg';
import bigcard2 from '../Assets/img/image/bigcard2.jpg';
import bigcard3 from '../Assets/img/image/bigcard3.jpg';
import Slider from 'react-slick';
import { GrFormPrevious } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { GrFormNext } from "react-icons/gr";


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

const RoomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  // After the slide changes, update the currentSlide
  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  // Debugging currentSlide value
  React.useEffect(() => {
    console.log('Current Slide:', currentSlide); // Check the current slide index
  }, [currentSlide]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <NextArrow isDisabled={currentSlide === 1.6} />
    ),
    prevArrow: (
      <PrevArrow isDisabled={currentSlide === 0} />
    ),
    afterChange: handleAfterChange, // Updates the current slide after change
  };

  return (
    <div className="room-container">
      <div className="room-title">
      <span>Room for inspiration</span>

      </div>
      <div className="room-slider">
        <Slider {...settings}>
          <img src={bigcard1} alt="Room 1" />
          <img src={bigcard2} alt="Room 2" />
          <img src={bigcard3} alt="Room 3" />
        </Slider>
      </div>
    </div>
  );
};

export default RoomSlider;
