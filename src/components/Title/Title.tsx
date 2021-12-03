import React from "react";
import "../../style.css";

type levelType = 1 | 2 | 3 | 4 | 5 | 6;

export interface ButtonProps {
  children?: React.ReactNode;
  level: levelType;
  className?: string;
}

const Title = ({ children, level, className }: ButtonProps) => {
  let titleHtml: React.ReactNode;
  switch (level) {
    case 2: {
      titleHtml = <h2 className={className}>{children}</h2>;
      break;
    }
    case 3: {
      titleHtml = <h3 className={className}>{children}</h3>;
      break;
    }
    case 4: {
      titleHtml = <h4 className={className}>{children}</h4>;
      break;
    }
    case 5: {
      titleHtml = <h5 className={className}>{children}</h5>;
      break;
    }
    case 6: {
      titleHtml = <h6 className={className}>{children}</h6>;
      break;
    }
    default: {
      titleHtml = <h1 className={className}>{children}</h1>;
      break;
    }
  }
  return titleHtml;
};

export default Title;
