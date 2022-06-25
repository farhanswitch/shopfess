import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FC } from "react";
const CarouselComp: FC = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        dynamicHeight={true}
        stopOnHover={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div className="bg-blue-900/70">
          <img
            className="block max-h-[350px] max-w-2xl"
            src="/80-banner.jpg"
            alt="discount 80%"
          />
        </div>
        <div className="bg-blue-900/60">
          <img
            className="max-h-[350px] max-w-2xl"
            src="/shipping-banner.jpg"
            alt="free shipping"
          />
        </div>
        <div className="bg-blue-900/70">
          <img
            className="max-h-[350px] max-w-2xl"
            src="/payment-method.webp"
            alt="payment method"
          />
        </div>
        <div className="bg-blue-900/70">
          <img
            className="max-h-[350px] max-w-2xl"
            src="/sale-discount-banner.jpg"
            alt="sale"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
