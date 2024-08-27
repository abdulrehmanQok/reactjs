import React from 'react'
import Saphirenav from './components/Saphirenav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Saphirenav2 from './components/Saphirenav2';
import Saphire_slider from './components/Saphire_slider';
import Saphire_catog from './components/Saphire_catog';
import Saphire_footer from './components/Saphire_footer';
import Saphire_trend from './components/Saphire_trend';
import Saphire_more from './components/Saphire_more';
import Saphire_styled from './components/Saphire_styled';

// import Saphire_slider from './components/Saphire_slider'
const App = (a) => {
  return (
    <div>
    <Saphirenav/>
    <Saphirenav2/>
    <Saphire_slider/>
    <div className='text-center'>    
    <h1> SHOP BY CATOGERY </h1>
</div>
    <Saphire_catog/>
    <div className='text-center'>
    <h1> TRENDING  </h1>
    </div>
    <Saphire_trend/>
    <div className='text-center'>
      <h1>MORE TO EXPLORE</h1>
    </div>
    <Saphire_more/>
    <div className='text-center'>
      <h1>STYLED BY YOU</h1>
      <h5>#SAPPHIREXME</h5>
    </div>
    <Saphire_styled/> 
    <Saphire_footer/>
          
    </div>
  )
}

export default App
