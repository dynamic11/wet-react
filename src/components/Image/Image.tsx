import React from 'react';
import Image from 'react-bootstrap/Image';
import '../../style.css';

export interface ImageWETProps {
  /** Sets image shape as rounded. */
  rounded?: boolean;
  /** Sets image shape as circle. */
  roundedCircle?: boolean;
  /** Sets image shape as thumbnail. */
  thumbnail?: boolean;
  /** Use to make larger images scale properly, and never exceed the width of the parent container */
  responsive?: boolean;
  /** Use to stretch a smaller image to the width of the container. */
  fullWidth?: boolean;
  /** Use to add any kind of content like headings, paragraphs, or buttons into a thumbnail, to create a thumbnail tile effect */
  thumbnailTile?: boolean;
  /** Use to layer text and images for media content like blog comments, tweets, and so forth. */
  media?: boolean;
  /** Sets the source of the image */
  src: string;
  /** Sets the alternate text for the image */
  alt: string;
}

const ImageWET = ({
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  responsive = false,
  fullWidth = false,
  thumbnailTile = false,
  media = false,
  src = '',
  alt = '',
  ...rest
}: ImageWETProps) => {
  const styles = rounded === true ? 'img-rounded' : '';
  const styles2 = roundedCircle === true ? 'img-circle' : '';
  const styles3 = thumbnail === true ? 'img-thumbnail' : '';
  const styles4 = responsive === true ? 'img-responsive' : '';
  const styles5 = fullWidth === true ? 'full-width' : '';
  const styles6 = thumbnailTile === true ? 'thumbnail' : '';
  const styles7 = media === true ? 'media-object' : '';
  const finalstyle = `${styles} ${styles2} ${styles3} ${styles4} ${styles5} ${styles6} ${styles7}`;

  return <Image src={src} alt={alt} className={finalstyle} {...rest} />;
};

export default ImageWET;
