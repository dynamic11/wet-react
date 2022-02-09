import React from 'react';
import { render, screen } from '@testing-library/react';

import Title from '@components/Title';

describe('Title', () => {
  const titleContent = 'Hello world!';
  test('renders default Title component', () => {
    render(<Title>{titleContent}</Title>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      titleContent
    );
  });

  test('renders the level 1 Title component', () => {
    render(<Title level="h1">{titleContent}</Title>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      titleContent
    );
  });

  test('renders the level 2 Title component', () => {
    render(<Title level="h2">Hello world!</Title>);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      titleContent
    );
  });

  test('renders the level 3 Title component', () => {
    render(<Title level="h3">Hello world!</Title>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      titleContent
    );
  });

  test('renders the level 4 Title component', () => {
    render(<Title level="h4">Hello world!</Title>);
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      titleContent
    );
  });

  test('renders the level 5 Title component', () => {
    render(<Title level="h5">Hello world!</Title>);
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent(
      titleContent
    );
  });

  test('renders the level 6 Title component', () => {
    render(<Title level="h6">Hello world!</Title>);
    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent(
      titleContent
    );
  });
});
