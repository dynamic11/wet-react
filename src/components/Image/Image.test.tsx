import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ImageWET from '@components/Image';

describe('Image Tests', () => {
  test('Test image component', () => {
    render(<ImageWET rounded />);
    expect(screen.getByRole('img')).toHaveClass('rounded');
  });
  test('Test image source', () => {
    render(
      <ImageWET
        src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
        roundedCircle
        alt="Cool Cat Photo"
      />
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA='
    );
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Cool Cat Photo');
  });
});
