
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const data = [
  " https://pk.sapphireonline.pk/cdn/shop/files/Desktop-Banner_53b7efcc-78bf-4207-ae94-845329b79dcc.jpg?v=1724304031&width=2000",
  "https://pk.sapphireonline.pk/cdn/shop/files/US-intermix-Slider-Banner.jpg?v=1723726456&width=1800",
  "https://pk.sapphireonline.pk/cdn/shop/files/modest_Slider_Banner.jpg?v=1723715836&width=1800",
  "https://pk.sapphireonline.pk/cdn/shop/files/men_s_stitched-Slider-Banner.jpg?v=1723715454&width=1800"
];
const items=data.map((x,i)=>{
  return <img key={i} src={x} alt={'Slide ${i+1}'} className='img-fluid' />;
});

const Saphire_slider = () => {
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

export default Saphire_slider
