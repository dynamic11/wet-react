import React, { ReactNode } from 'react';
import '../../style.css';

type detailData = {
  key: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export interface DetailItemProps
  extends React.HTMLAttributes<HTMLDetailsElement> {
  /** data used to create the detail item */
  dataItem: detailData;
}

export interface DetailsProps extends React.HTMLAttributes<HTMLDetailsElement> {
  /** An array of data used to create the details */
  data: detailData[];
  /** Additional custom classNames */
  className?: string;
}

const DetailItem = ({ dataItem, ...rest }: DetailItemProps) => (
  <li className={dataItem.className}>
    <details key={dataItem.key} {...rest}>
      <summary key={dataItem.key}>{dataItem.title}</summary>
      {dataItem.children}
    </details>
  </li>
);

const Details = ({ className = '', data, ...rest }: DetailsProps) => (
  <ul className={`list-unstyled ${className}`}>
    {data.map((dataItem) => (
      <DetailItem dataItem={dataItem} key={dataItem.key} {...rest} />
    ))}
  </ul>
);

Details.displayName = 'Details';

export default Details;
