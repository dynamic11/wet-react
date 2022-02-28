import OriginCarousel from './Carousel';
import CarouselItem from './CarouselItem';

export type CarouselProps = typeof OriginCarousel & {
  Item: typeof CarouselItem;
};

const Carousel = OriginCarousel as CarouselProps;

Carousel.Item = CarouselItem;

export default Carousel;
