import React, { ReactNode } from 'react';
import '../../style.css';

type detailData = {
  key: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export interface DetailItemProps {
  /** data used to create the detail item */
  dataItem: detailData;
}

export interface DetailsProps {
  /** An array of data used to create the details */
  data: detailData[];
  /** Additional custom classNames */
  className?: string;
}

const DetailItem = ({ dataItem }: DetailItemProps) => (
  <li key={dataItem.key} className={dataItem.className}>
    <details key={dataItem.key}>
      <summary key={dataItem.key}>{dataItem.title}</summary>
      {dataItem.children}
    </details>
  </li>
);

const Details = ({ className = '', data, ...rest }: DetailsProps) => (
  <ul className={`list-unstyled ${className}`} {...rest}>
    {data.map((dataItem) => (
      <DetailItem dataItem={dataItem} />
    ))}
  </ul>
);

Details.displayName = 'Details';

export default Details;
