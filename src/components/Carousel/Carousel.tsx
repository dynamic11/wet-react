import React from 'react';

import '../../style.css';

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The content of the Carousel */
  children?: React.ReactNode;
  /** Deteermines if the carousel will forget what */
}

const Carousel = ({ children, ...rest }: CarouselProps) => (
  <div className="wb-tabs carousel-s1">
    <div className="tabpanel">{children}</div>
  </div>
);

Carousel.displayName = 'Carousel';

export default Carousel;
