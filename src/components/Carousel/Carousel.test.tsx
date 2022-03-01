import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Carousel from '@components/Carousel';

const text1 = 'The first bit of content';
const text2 = 'The content of the sequel';
const text3 = 'A half decent ending';
describe('Carousel Tests', () => {
  describe('Styling tests', () => {
    test('Carousel has right class name', () => {
      render(
        <Carousel>
          <Carousel.Item>{text1}</Carousel.Item>
          <Carousel.Item>{text2}</Carousel.Item>
          <Carousel.Item>{text3}</Carousel.Item>
        </Carousel>
      );
    });
  });
});
