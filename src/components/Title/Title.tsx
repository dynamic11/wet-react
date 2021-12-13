import React from 'react';
import '../../style.css';

/** Types */
type levelType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export interface TitleProps {
  /** Content of heading */
  children?: React.ReactNode;
  /** Heading level */
  level: levelType;
  /** Additional custom classNames */
  className?: string;
}

const Title = ({ children, level = 'h1', ...rest }: TitleProps) => {
  let titleHtml: React.ReactNode;
  switch (level) {
    case 'h2': {
      titleHtml = <h2 {...rest}>{children}</h2>;
      break;
    }
    case 'h3': {
      titleHtml = <h3 {...rest}>{children}</h3>;
      break;
    }
    case 'h4': {
      titleHtml = <h4 {...rest}>{children}</h4>;
      break;
    }
    case 'h5': {
      titleHtml = <h5 {...rest}>{children}</h5>;
      break;
    }
    case 'h6': {
      titleHtml = <h6 {...rest}>{children}</h6>;
      break;
    }
    default: {
      titleHtml = <h1 {...rest}>{children}</h1>;
      break;
    }
  }
  return titleHtml;
};

export default Title;
