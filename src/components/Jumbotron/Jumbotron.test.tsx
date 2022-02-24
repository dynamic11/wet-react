import React from 'react';
import { screen, render } from '@testing-library/react';
import Jumbotron from '@components/Jumbotron';

const content = 'some content';
describe('Jumbotron tests', () => {
  describe('Test Jumbotron Styling', () => {
    test('Default class', () => {
      render(<Jumbotron>{content}</Jumbotron>);
      expect(screen.getByText(content)).toHaveClass('jumbotron');
    });
    test('Fluid style', () => {
      render(<Jumbotron fluid>{content}</Jumbotron>);
      expect(screen.getByText(content)).toHaveClass('container-fluid');
    });
  });
});
