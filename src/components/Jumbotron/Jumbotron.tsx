import React from 'react';

import '../../style.css';

export interface JumbotronProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The content of the jumbotron */
  children?: React.ReactNode;
  /** Determines if the jumbotron takes up the full width on the container with no rounded corners */
  fluid?: boolean;
}

const Jumbotron = ({ children, fluid = false, ...rest }: JumbotronProps) => {
  const style = fluid ? 'container-fluid' : '';
  return <section className={`jumbotron ${style}`}>{children}</section>;
};

export default Jumbotron;
