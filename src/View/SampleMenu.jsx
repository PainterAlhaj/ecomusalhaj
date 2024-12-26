import React from "react";
// import '../Assets/Css/SampleMenu.css'
import productmenu1 from  '../Assets/img/image/product-menu1.jpg'
import productmenu2 from  '../Assets/img/image/product-menu2.jpg'
import { Badge, Button,  } from "@mui/material";
import { LuArrowUpRight } from 'react-icons/lu';
import Slider from "react-slick";
import MenuSlider from "./MenuSlider";



const SampleMenu = () => {

// const settings={
//   dots: false,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   draggable: true,
//   arrows:false,
// }

  return (
    <>
       <div className="product-menu">
              <div className="product-container">
                <div className="row-container">
                <div className="row">
                  <div className="col one">
                    <div className="heading">Product Layouts</div>
                    <ul>

                      <li>
                        <a href="#">                     Product default
                        </a>
                      </li>
                      <li>
                        <a href="#"> Product grid 1
                        </a>
                      </li>
                      <li>
                        <a href="#">Product grid 2
                        </a>
                      </li>
                      <li>
                        <a href="#"> Product stacked
                        </a>
                      </li>
                      <li>
                        <a href="#">Product right thumbnails
                        </a>
                      </li>
                      <li>
                      Product drawer sidebar


                        <a href="#"></a>
                      </li>
                      <li>
                     
                      Product description accordion


                        <a href="#"></a>
                      </li>
                      <li><a href="#">
Product description list
                        </a></li><li>
                      Product description vertical

                        <a href="#"></a>
                      </li>
                    </ul>
                  </div>
                  <div className="col two">
                      <div className="heading">Product Details</div>
                      <ul>


                      <li>
                        <a href="#">                                 Product inner zoom

                        </a>
                      </li>
                      <li>
                        <a href="#">Product zoom magnifier

                        </a>
                      </li>
                      <li>
                        <a href="#">Product no zoom

                        </a>
                      </li>
                      <li>
                        <a href="#"> Product photoswipe popup

                        </a>
                      </li>
                      <li>
                        <a href="#">Product external zoom and photoswipe popup

                        </a>
                      </li>
                      <li>
                        <a href="#">Product video


                        </a>
                      </li> <li>
                        <a href="#">Product 3D, AR models


                        </a>
                      </li> <li>
                        <a href="#">Product options & customizer

                        </a>
                      </li> <li>
                        <a href="#">Advanced product types


                        </a>
                      </li> <li>
                        <a href="#">Recipient information form for gift card products


                        </a>
                      </li>
                      
                    </ul>
      
                  </div>
                  <div className="col three">
                      <div className="heading">Product Styles</div>
      <ul>
                      <li>
                        <a href="#">                 Product style list
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product style 01
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product style 02
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product style 03
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product style 04
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product style 05
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product style 06
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product style 07
      
                        </a>
                      </li>
                      
                    </ul>
                  </div>

                  <div className="col four">
                      <div className="heading">Product Features</div>
      <ul>

                      <li>
                        <a href="#">      Frequently bought together

      
                        </a>
                      </li>
                      <li>
                        <a href="#">Frequently bought together 2

      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product upsell features

                        </a>
                      </li>
                      <li>
                        <a href="#">Product pre-orders

      
                        </a>
                      </li>
                      <li>
                        <a href="#">Back in stock notification

      
                        </a>
                      </li>
                      <li>
                        <a href="#">Product pickup

      
                        </a>
                      </li>
                      <li>
                        <a href="#">Variant images grouped

      
                        </a>
                      </li>
                      <li>
                        <a href="#">Complimentary products

      
                        </a>
                      </li>

                      <li>
                      <Badge badgeContent={'New'} color="primary" 
                      sx={{ 
                       '& .MuiBadge-badge': {
                    backgroundColor: '#48D4BB', // Custom color
                    color: 'white', 
                    fontSize:'11px'
                    // Text color inside the badge
                  },
                  }} >

                        <a href="#">
                       Quick order list


      
                        </a>
                       </Badge>

                       </li>


                     
                      
                    </ul>
                  </div>


                  
                  <div className="col five">
         <div className="heading">
         Best seller

          </div>           


<MenuSlider/>


      
                  </div>
                 
      
                </div>
                </div>
              </div>
            </div>
    </>
  );
};

export default SampleMenu;
