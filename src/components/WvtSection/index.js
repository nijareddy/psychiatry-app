
import Carousel from '../Carousal';




const slides = [
  
   'https://i.ibb.co/Z2cYvFF/image1.jpg',
   'https://i.ibb.co/Z2cYvFF/image1.jpg',
   'https://i.ibb.co/Z2cYvFF/image1.jpg'
]
const WvtSection = () => {
   return (<div>
    <Carousel>
      {slides.map((src) => (<img src = {src} className='carousal-img'/>))}
    </Carousel>
   </div>

   )
};

export default WvtSection;
