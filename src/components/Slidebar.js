
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const data = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg"   
];
const items=data.map((x,i)=>{
  return <img key={i} src={x} alt={'Slide ${i+1}'} className='img-fluid' />;
});

const Slidebar = () => {
  return (
    <div className='container'>
    <AliceCarousel
        // mouseTracking
        items={items}
        autoPlay
        infinite
        disableButtonsControls
        disableDotsControls
        autoPlayInterval={2000}
        // responsive={responsive}
        // controlsStrategy="alternate"
    />
      
    </div>
  )
}

export default Slidebar
