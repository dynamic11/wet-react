import React, { ReactNode } from 'react';

type detailData = {
  key: string;
  title: ReactNode;
  isOpen?: boolean;
  children: ReactNode;
  className?: string;
};

export interface DetailItemProps
  extends React.HTMLAttributes<HTMLDetailsElement> {
  /** data used to create the detail item */
  dataItem: detailData;
  /** should panel be in open state */
  isOpen?: boolean;
}

export interface DetailsProps extends React.HTMLAttributes<HTMLDetailsElement> {
  /** An array of data used to create the details */
  data: detailData[];
  /** Additional custom classNames */
  className?: string;
}

const DetailItem = ({ dataItem, isOpen, ...rest }: DetailItemProps) => (
  <li className={dataItem.className}>
    <details key={dataItem.key} {...rest} open={isOpen}>
      <summary key={dataItem.key}>{dataItem.title}</summary>
      {dataItem.children}
    </details>
  </li>
);

const Details = ({ className = '', data, ...rest }: DetailsProps) => (
  <ul className={`list-unstyled ${className}`}>
    {data.map((dataItem) => (
      <DetailItem
        dataItem={dataItem}
        key={dataItem.key}
        isOpen={dataItem.isOpen}
        {...rest}
      />
    ))}
  </ul>
);

Details.displayName = 'Details';

export default Details;
