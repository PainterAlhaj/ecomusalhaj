import React from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './Component/Layouts/Navbar';
import MiniNavbar from './View/MiniNavbar';
import Footer from './Component/Layouts/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './View/Hero';
import CardSlider from './View/CardSlider';
import Gallery from './View/Gallery';
import FreeServices from './View/Freeservices';
import ProductSlider from './View/ProductSlider';
import RoomSlider from './View/RoomSlider';
import CardSlider2 from './View/CardSlider2';
import GridDesign from './View/GridDesign';

const App = () => {
  return (
   <>
   
   <Navbar/>
   <MiniNavbar/>
  <Hero/>
   
   <GridDesign/>

   <CardSlider/>
   
<ProductSlider/>
<RoomSlider/>
<FreeServices/>

<Gallery/>

<Footer/>   

   </>
  )
}


export default App








