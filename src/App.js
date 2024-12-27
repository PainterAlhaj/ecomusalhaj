import React, { useState } from 'react'
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/albert-sans"; // Defaults to weight 400
import "@fontsource/albert-sans/400.css"; // Specify weight
import "@fontsource/albert-sans/500.css"; // Specify weight

import "@fontsource/albert-sans/400-italic.css";
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
import SampleMenu from './View/SampleMenu';
import MenuSlider from './View/MenuSlider';
import SampleHomemenu from './View/SampleHomemenu';
import LoginModal from './View/LoginModal';
import SearchDrawer from './View/SearchDrawer';
import SixSection from './View/SixSection';

const App = () => {
   const [loginmodal,setloginmodal]=useState(false)
   const [opensearchdrawer, setopensearchdrawer] = useState(false);


   const modalopen=(()=>{
      setloginmodal(!loginmodal)
    })
    const searchdrawerevent=(()=>{
      setopensearchdrawer(!opensearchdrawer)
    })

  return (
   <>

{/* <SampleHomemenu/> */}
 <LoginModal loginmodal={loginmodal} setloginmodal={setloginmodal}/>
   <SearchDrawer opensearchdrawer={opensearchdrawer} setopensearchdrawer={setopensearchdrawer}/>

   <Navbar modalopen={modalopen} loginmodal={loginmodal}  searchdrawerevent={searchdrawerevent}/>
   <MiniNavbar/>

<Hero/> 
  
   {/* <GridDesign/>  */}

   <CardSlider/>
   {/* <SixSection/> */}

   
<ProductSlider/>
<RoomSlider/>
<FreeServices/>

<Gallery/>

{/* <Footer/>    */}

   </>
  )
}


export default App











