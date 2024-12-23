import React from 'react'
import '../Assets/Css/GridDesign.css'
import griddesign1 from '../Assets/img/image/griddesign1.jpg'
import griddesign2 from '../Assets/img/image/griddesign2.jpg'
import griddesign3 from '../Assets/img/image/griddesign3.jpg'
import { LuArrowUpRight } from "react-icons/lu";



const GridDesign = () => {
  return (
   <>
   <div className="design-container">
    <div className="design-box">
        <div className="img-container one">
            <img src={griddesign1} alt="" />
            <div className="content">
                <h5>Spring Collection</h5>
                <p>Every peace is made to last beyond the season</p>
                <span>Shop Collection  <LuArrowUpRight/> </span>
            </div>
        </div>
        <div className="img-container two">
            <div className="mini-img">
            <img src={griddesign2} alt="" />
            <div className="content">
                <h5>Upto 30% off</h5>
                <span>Shop Collection  <LuArrowUpRight/> </span>
            </div>
            </div>
            <div className="mini-img">
            <img src={griddesign3} alt="" />
            <div className="content">
                <h5>Lighting Collection</h5>
                <span>Shop Collection  <LuArrowUpRight/> </span>
            </div>
            </div>

        </div>
        
    </div>
   </div>
   </>
  )
}

export default GridDesign
