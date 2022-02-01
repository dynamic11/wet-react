import React from 'react';
import Image from 'react-bootstrap/Image';
import '../../style.css';

export interface ImageProps {
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
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  src = '',
  alt = '',
  ...rest
}: ImageProps) => {
  const styles = rounded === true ? 'img-rounded' : '';
  const styles2 = roundedCircle === true ? 'img-circle' : '';
  const styles3 = thumbnail === true ? 'img-thumbnail' : '';
  const finalstyle = `${styles} ${styles2} ${styles3}`;

  return (
    <Image
      src={src}
      alt={alt}
      className={finalstyle.trimStart().trimEnd()}
      {...rest}
    />
  );
};

export default ImageWET;
