import React from 'react';

import '../../style.css';

export interface JumbotronProps {
  /** The content of the jumbotron */
  children?: React.ReactNode;
  /** Determines if the jumbotron takes up the full width on the container with no rounded corners. Should be */
  fluid?: boolean;
}

const Jumbotron = ({ children, fluid = false, ...rest }: JumbotronProps) => {
  const style = fluid ? 'container-fluid' : '';
  return <div className={`jumbotron ${style}`}>{children}</div>;
};

export default Jumbotron;
