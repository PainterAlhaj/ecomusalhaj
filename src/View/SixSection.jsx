import React from 'react';
import { motion } from 'framer-motion';
import '../Assets/Css/SixSection.css'
import { Button } from '@mui/material';
const SixSection = () => {
  return (
    <>
      {/* {/ Parallax Background Section /} */}
      <section className="sixth-section" >

      <motion.div
        className="content-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

<div className="motionbox">

<h3 class="subheading">FUNCTIONAL AND STYLISH</h3>
<h3 class="heading">Mid-Century Modern</h3>
<p class="text">Find furniture that seamlessly combines functionality and style</p>
<Button className='btn'>Shop Collection</Button>
</div>
      </motion.div>
      </section>

    </>
  );
};

export default SixSection;