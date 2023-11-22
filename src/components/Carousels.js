import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousels.css';

export default function Carousels() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel responsive={responsive} className="Carousel">
      <div className="CarouselItem">
        <img src="./img/sneakers/sneakers1.jpg" alt="Sneakers" className="CarouselImage" />
        <div className="CategoryText">Sneakers</div>
      </div>
      <div className="CarouselItem">
        <img src="./img/heels/heels1.jpg" alt="Heels" className="CarouselImage" />
        <div className="CategoryText">Heels</div>
      </div>
      <div className="CarouselItem">
        <img src="./img/boots/boots1.jpg" alt="Boots" className="CarouselImage" />
        <div className="CategoryText">Boots</div>
      </div>
      <div className="CarouselItem">
        <img src="./img/allCategories/all1.jpg" alt="All" className="CarouselImage" />
        <div className="CategoryText">All</div>
      </div>
      {/* Lisää muut kuvat ja kategoria tekstit samalla tavalla */}
    </Carousel>
  );
};

