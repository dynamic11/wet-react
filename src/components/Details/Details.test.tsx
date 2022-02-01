import React from 'react';
import { render, screen } from '@testing-library/react';

import Details from '@components/Details';

describe('Details', () => {
  const detailsData = [
    {
      key: 'key1',
      title: 'Summary 1',
      children: <h2>This is Summary content</h2>,
      className: '',
    },
    {
      key: 'key2',
      title: 'Summary 2',
      children: <h2>This is Summary content 2</h2>,
    },
    {
      key: 'key3',
      title: 'Summary 3',
      children: <h2>This is Summary content as well 3</h2>,
    },
  ];

  describe('Test Details Variants', () => {
    test('Default Panel', () => {
      const result = render(<Details data={detailsData} />);
      detailsData.forEach((data) => {
        expect(screen.getByText(data.title)).toBeInTheDocument();
      });
      expect(result.container.querySelectorAll('h2').length).toBe(
        detailsData.length
      );
    });
  });
});
