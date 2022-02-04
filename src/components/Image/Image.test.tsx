import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ImageWET from '@components/Image';

describe('Image Tests', () => {
  describe('Test image component style variations', () => {
    test('Test rounded style', () => {
      render(
        <ImageWET
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          rounded
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-rounded');
    });

    test('Test circle style', () => {
      render(
        <ImageWET
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          roundedCircle
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-circle');
    });

    test('Test thumbnail style', () => {
      render(
        <ImageWET
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          thumbnail
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-thumbnail');
    });

    test('Test full width style', () => {
      render(
        <ImageWET
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          fullWidth
        />
      );
      expect(screen.getByRole('img')).toHaveClass('full-width');
    });

    test('Test thumbnail tile style ', () => {
      render(
        <ImageWET
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          thumbnailTile
        />
      );
      expect(screen.getByRole('img')).toHaveClass('thumbnail');
    });

    test('Test media object style', () => {
      render(
        <ImageWET
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          media
        />
      );
      expect(screen.getByRole('img')).toHaveClass('media-object');
    });

    test('Test responsive style', () => {
      render(
        <ImageWET
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          responsive
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-responsive');
    });
  });
  test('Test image defaults', () => {
    render(<ImageWET rounded />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '');
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });
  test('Test image source and alt', () => {
    render(
      <ImageWET
        src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
        thumbnail
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
