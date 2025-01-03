import React, { useEffect, useState } from 'react'
import '../Assets/Css/SampleHomemenu.css'
import homemenu1 from '../Assets/img/image/homemenu1.jpg'
import homemenu2 from '../Assets/img/image/homemenu2.jpg'
import homemenu3 from '../Assets/img/image/homemenu3.jpg'
import homemenu4 from '../Assets/img/image/homemenu4.jpg'
import homemenu5 from '../Assets/img/image/homemenu5.jpg'
import homemenu6 from '../Assets/img/image/homemenu6.jpg'
import homemenu7 from '../Assets/img/image/homemenu7.jpg'
import homemenu8 from '../Assets/img/image/homemenu8.jpg'
import homemenu9 from '../Assets/img/image/homemenu9.jpg'
import homemenu10 from '../Assets/img/image/homemenu10.jpg'
import homemenu11 from '../Assets/img/image/homemenu11.jpg'
import homemenu12 from '../Assets/img/image/homemenu12.jpg'
import { FaAngleRight } from "react-icons/fa6";

import { Button } from '@mui/material'



const SampleHomemenu = () => {
      const [isFixed, setIsFixed] = useState(false);
      
        const [lastScrollY, setLastScrollY] = useState(0)
         const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
              // Scroll down ho raha hai aur 100px se zyada scroll ho gaya hai
              setIsFixed(false);
            } else if (window.scrollY < lastScrollY && window.scrollY > 100) {
              // Scroll up ho raha hai aur 100px se zyada scroll ho gaya hai
              setIsFixed(true);
            }
            setLastScrollY(window.scrollY); // Last scroll position ko update karte hain
          };
        
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        },  [lastScrollY]);
  return (
    <div className="home-menu-new-big">
   <div className="home-menu"
   style={{

    // position: isFixed ? 'fixed' : 'relative', 
    // position:'fixed',
// top:'150px',
// width:'100%'

   }}>
    <div className="home-menu-container">
<div className="row">
    <div className="col">
<img src={homemenu1} alt="" />
<p>Home Multi Brand</p>
    </div>
    <div className="col">
<img src={homemenu2} alt="" />
<p>Home Multi Brand</p>
    </div>
    <div className="col">
<img src={homemenu3} alt="" />
<p>Home Multi Brand</p>
    </div> <div className="col">
<img src={homemenu4} alt="" />
<p>Home Multi Brand</p>
    </div> <div className="col">
<img src={homemenu5} alt="" />
<p>Home Multi Brand</p>
    </div> <div className="col">
<img src={homemenu6} alt="" />
<p>Home Multi Brand</p>
    </div> <div className="col">
<img src={homemenu7} alt="" />
<p>Home Multi Brand</p>
    </div> <div className="col">
<img src={homemenu8} alt="" />
<p>Home Multi Brand</p>
    </div> <div className="col">
<img src={homemenu9} alt="" />
<p>Home Multi Brand</p>
    </div> <div className="col">
<img src={homemenu10} alt="" />
<p>Home Multi Brand</p>
    </div> 
    <div className="col">
<img src={homemenu11} alt="" />
<p>Home Multi Brand</p>
    </div>
    <div className="col">
<img src={homemenu12} alt="" />
<p>Home Multi Brand</p>
    </div>
</div>
<Button className='btn'>View all demos  
    <span>   (34+) </span>
    <FaAngleRight style={{ marginLeft: '10px', fontSize: "14px" }} />
</Button>
 
</div>

   </div>
   </div>
  )
}

export default SampleHomemenu
