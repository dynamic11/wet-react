import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Image from '@components/Image';

describe('Image Tests', () => {
  describe('Test image component style variations', () => {
    test('Test rounded style', () => {
      render(
        <Image
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          rounded
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-rounded');
    });

    test('Test circle style', () => {
      render(
        <Image
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          roundedCircle
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-circle');
    });

    test('Test thumbnail style', () => {
      render(
        <Image
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          thumbnail
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-thumbnail');
    });

    test('Test fill container style', () => {
      render(
        <Image
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          fullWidth
        />
      );
      expect(screen.getByRole('img')).toHaveClass('full-width');
    });

    test('Test content style ', () => {
      render(
        <Image
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          thumbnailContent
        />
      );
      expect(screen.getByRole('img')).toHaveClass('thumbnail');
    });

    test('Test media object style', () => {
      render(
        <Image
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          mediaObject
        />
      );
      expect(screen.getByRole('img')).toHaveClass('media-object');
    });

    test('Test responsive style', () => {
      render(
        <Image
          src="https://media.istockphoto.com/photos/very-closeup-view-of-amazing-domestic-pet-in-mirror-round-fashion-is-picture-id1281804798?b=1&k=20&m=1281804798&s=170667a&w=0&h=HIWbeaP_cQSngCz7l9t3xwyE2eyzVgIy3K6xIqPhJQA="
          responsive
        />
      );
      expect(screen.getByRole('img')).toHaveClass('img-responsive');
    });
  });
  test('Test image defaults', () => {
    render(<Image rounded />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '');
    expect(screen.getByRole('img')).toHaveAttribute('alt', '');
  });
  test('Test image source and alt', () => {
    render(
      <Image
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
