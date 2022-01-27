import React from 'react';
import Image from 'react-bootstrap/Image';
import '../../style.css';

export interface ImageProps {
  /** Sets image as fluid image. */
  fluid?: boolean;
  /** Sets image shape as rounded. */
  rounded?: boolean;
  /** Sets image shape as circle. */
  roundedCircle?: boolean;
  /** Sets image shape as thumbnail. */
  thumbnail?: boolean;
  /** Change the underlying component CSS base class name and modifier class names prefix.
   * This is an escape hatch for working with heavily customized bootstrap css. */
  bsPrefix?: string;
  /** Sets the source of the image */
  src?: string;
  /** Sets the alternate text for the image */
  alt?: string;
}

const ImageWET = ({
  fluid = false,
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  bsPrefix = 'img',
  src = '',
  alt = '',
  ...rest
}: ImageProps) => (
  <Image
    fluid={fluid}
    rounded={rounded}
    roundedCircle={roundedCircle}
    thumbnail={thumbnail}
    bsPrefix={bsPrefix}
    src={src}
    alt={alt}
    {...rest}
  />
);

export default ImageWET;
