import React from 'react'
import '../Assets/Css/Gallery.css'
import gallery1 from '../Assets/img/image/gallery1.jpg'
import gallery2 from '../Assets/img/image/gallery2.jpg'
import gallery3 from '../Assets/img/image/gallery3.jpg'
import gallery4 from '../Assets/img/image/gallery4.jpg'
import gallery5 from '../Assets/img/image/gallery5.jpg'
import gallery6 from '../Assets/img/image/gallery6.jpg'
import Slider from 'react-slick'


const Gallery = () => {
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              }
            ]
      };
    
  return (
    <>
    <div className="gallery-container">
    <div className="gallery-title">
      <span>Shop  Gram</span>
      <p>Here’s some of our most popular products people are in love with.</p>

      </div>
        <div className="gallery-slider">
            <Slider {...settings}>
            <div className="gallery-slide">
                <img src={gallery1}/>
            </div>
            <div className="gallery-slide">
                <img src={gallery2}/>
            </div>
             <div className="gallery-slide">
                <img src={gallery3}/>
            </div> 
            <div className="gallery-slide">
                <img src={gallery4}/>
            </div> 
            <div className="gallery-slide">
                <img src={gallery5}/>
            </div>
             <div className="gallery-slide">
                <img src={gallery6}/>
            </div>
            </Slider>
        </div>
    </div>
    </>
  )
}

export default Gallery
