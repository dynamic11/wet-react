import React from 'react';
import '../../style.css';

/** Types */
type levelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  /** Content of heading */
  children?: React.ReactNode;
  /** Heading level */
  level: levelType;
  /** Additional custom classNames */
  className?: string;
}

const Title = ({ children, level = 'h1', ...rest }: TitleProps) => {
  const Tag =
    level === 'h2'
      ? 'h2'
      : level === 'h3'
      ? 'h3'
      : level === 'h4'
      ? 'h4'
      : level === 'h5'
      ? 'h5'
      : level === 'h6'
      ? 'h6'
      : 'h1';

  return <Tag {...rest}>{children}</Tag>;
};

export default Title;
