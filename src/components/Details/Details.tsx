import React, { ReactNode } from 'react';
import '../../style.css';

type detailData = {
  key: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export interface DetailsProps {
  /** An array of data used to create the details */
  data: detailData[];
  /** Additional custom classNames */
  className?: string;
}

const Details = ({ className = '', data, ...rest }: DetailsProps) => {
  const renderDetails = () =>
    data.map((detail) => (
      <li key={detail.key} className={className} {...rest}>
        <details key={detail.key}>
          <summary key={detail.key}>{detail.title}</summary>
          {detail.children}
        </details>
      </li>
    ));

  return <ul className="list-unstyled">{renderDetails()}</ul>;
};

Details.displayName = 'Details';

export default Details;
