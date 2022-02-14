import React from 'react';
import ImageRB from 'react-bootstrap/Image';
import '../../style.css';

export interface ImageProps {
  /** Sets image shape as rounded. */
  roundedCornerStyle?: boolean;
  /** Sets image shape as circle. */
  circleStyle?: boolean;
  /** Sets image shape as thumbnail. */
  thumbnailStyle?: boolean;
  /** Use to make larger images scale properly, and never exceed the width of the parent container */
  responsiveStyle?: boolean;
  /** Use to stretch a smaller image to the width of the container. */
  fillContainer?: boolean;
  /** Use to add any kind of content like headings, paragraphs, or buttons into a thumbnail, to create a thumbnail tile effect */
  contentStyle?: boolean;
  /** Use to layer text and images for media content like blog comments, tweets, and so forth. */
  mediaStyle?: boolean;
  /** Sets the source of the image */
  src: string;
  /** Sets the alternate text for the image */
  alt: string;
}

const Image = ({
  roundedCornerStyle = false,
  circleStyle = false,
  thumbnailStyle = false,
  responsiveStyle = false,
  fillContainer = false,
  contentStyle = false,
  mediaStyle = false,
  src = '',
  alt = '',
  ...rest
}: ImageProps) => {
  const styles = roundedCornerStyle === true ? 'img-rounded' : '';
  const styles2 = circleStyle === true ? 'img-circle' : '';
  const styles3 = thumbnailStyle === true ? 'img-thumbnail' : '';
  const styles4 = responsiveStyle === true ? 'img-responsive' : '';
  const styles5 = fillContainer === true ? 'full-width' : '';
  const styles6 = contentStyle === true ? 'thumbnail' : '';
  const styles7 = mediaStyle === true ? 'media-object' : '';
  const finalstyle = `${styles} ${styles2} ${styles3} ${styles4} ${styles5} ${styles6} ${styles7}`;

  return <ImageRB src={src} alt={alt} className={finalstyle} {...rest} />;
};

export default Image;
