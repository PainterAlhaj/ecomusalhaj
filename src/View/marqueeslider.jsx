import React, { useEffect, useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import '../Assets/Css/MarqueeSlider.css'

const Marqueeslider = () => {
  const [marqueeopen, setmarqueeopen] = useState(false);
  const marqueeRef = useRef(null); // Ref to access the marquee container

  const closemarquee = () => {
    setmarqueeopen(!marqueeopen);
  };

  useEffect(() => {
    // Reset the scroll position of the marquee container on mount
    if (marqueeRef.current) {
      marqueeRef.current.scrollTop = 0; // Scroll to the top
    }
  }, []);

  return (
    <div
      className="marquee-slider"
      ref={marqueeRef} // Attach the ref to the container
      style={{
        display: 'flex',
        opacity: marqueeopen ? 0 : 1,
        height: marqueeopen ? '0' : 'auto', // Adjust to desired visible height
        overflow: 'hidden', // Ensures no content overflows when height is 0
        justifyContent: 'center',
        alignItems: 'center',
        background: '#814037',
        color: 'white',
        fontFamily: 'Albert sans',
        gap: '10px',
        position: 'relative',
        top: marqueeopen ? '-40px' : '0',
        boxSizing: 'border-box',
        transition: 'all 0.6s ease',
        zIndex:'0',
       
      }}
    >
      <marquee
        behavior="slide"
        direction="left"
        style={{
          
          textTransform: 'uppercase',
          fontSize: '10px',
        }}
      >
      <div className="marquee-content">




        <div class="announcement-bar-item"><p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p></div>
        <div class="announcement-bar-item"><p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p></div>
        <div class="announcement-bar-item"><p>FREE SHIPPING AND RETURNS</p></div>
        <div class="announcement-bar-item"><p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p></div>
        <div class="announcement-bar-item"><p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p></div>
        <div class="announcement-bar-item"><p>LIMITED TIME OFFER: FASHION SALE YOU CAN'T RESIST</p></div>
        <div class="announcement-bar-item"><p>FREE SHIPPING AND RETURNS</p></div>
        <div class="announcement-bar-item"><p>NEW SEASON, NEW STYLES: FASHION SALE YOU CAN'T MISS</p></div>

        </div>

      </marquee>
      <IoClose
        onClick={closemarquee}
        style={{
          fontSize: '20px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default Marqueeslider;
