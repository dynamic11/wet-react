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
  src = '',
  alt = '',
  ...rest
}: ImageProps) => (
  <Image
    fluid={fluid}
    rounded={rounded}
    roundedCircle={roundedCircle}
    thumbnail={thumbnail}
    src={src}
    alt={alt}
    {...rest}
  />
);

export default ImageWET;
