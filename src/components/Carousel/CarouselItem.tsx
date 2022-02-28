import React from 'react';
import '../../style.css';

export interface CarouselItemProps
  extends React.ReactElement<HTMLDetailsElement> {
  /** Determines if this tab is open by default or not. */
  open?: boolean;
  /** The content of the Carousel Item */
  children?: React.ReactNode;
  /** Unique identifier for the details component */
  id?: string;
  /** Label of the Tab */
  label: string;
}

const CarouselItem = ({
  open = false,
  children,
  id,
  label = 'summary',
  ...rest
}: CarouselItemProps) => {
  const startPoint = open === true ? 'open' : '';
  return (
    <details open={startPoint} id={id} {...rest}>
      <summary className="wb-toggle tgl-tab wb-init wb-toggle-inited">
        {label}
      </summary>
      <div className="tgl panel" role="tabpanel">
        {children}
      </div>
    </details>
  );
};

CarouselItem.displayName = 'Carousel.Item';

export default CarouselItem;
