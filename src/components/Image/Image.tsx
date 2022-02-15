import React from 'react';
import ImageRB from 'react-bootstrap/Image';
import '../../style.css';

export interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
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
  thumbnailContent?: boolean;
  /** Use to layer text and images for media content like blog comments, tweets, and so forth. */
  mediaObject?: boolean;
  /** Sets the source of the image */
  src: string;
  /** Sets the alternate text for the image */
  alt: string;
}

const Image = ({
  rounded = false,
  roundedCircle = false,
  thumbnail = false,
  responsive = false,
  fullWidth = false,
  thumbnailContent = false,
  mediaObject = false,
  src = '',
  alt = '',
  ...rest
}: ImageProps) => {
  const roundedStyle = rounded === true ? 'img-rounded' : '';
  const circularStyle = roundedCircle === true ? 'img-circle' : '';
  const thumbnailStyle = thumbnail === true ? 'img-thumbnail' : '';
  const responsiveStyle = responsive === true ? 'img-responsive' : '';
  const fillStyle = fullWidth === true ? 'full-width' : '';
  const contentStyle = thumbnailContent === true ? 'thumbnail' : '';
  const mediaStyle = mediaObject === true ? 'media-object' : '';
  const finalstyle = `${roundedStyle} ${circularStyle} ${thumbnailStyle} ${responsiveStyle} ${fillStyle} ${contentStyle} ${mediaStyle}`;

  return <ImageRB src={src} alt={alt} className={finalstyle} {...rest} />;
};

export default Image;
