import React from 'react';
import { render } from '@testing-library/react';

import Title from './Title';

describe('Title', () => {
  test('renders the level 1 Title component', () => {
    render(<Title level="h1">Hello world!</Title>);
  });
  test('renders the level 2 Title component', () => {
    render(<Title level="h2">Hello world!</Title>);
  });
  test('renders the level 3 Title component', () => {
    render(<Title level="h3">Hello world!</Title>);
  });
  test('renders the level 4 Title component', () => {
    render(<Title level="h4">Hello world!</Title>);
  });
  test('renders the level 5 Title component', () => {
    render(<Title level="h5">Hello world!</Title>);
  });
  test('renders the level 6 Title component', () => {
    render(<Title level="h6">Hello world!</Title>);
  });
});
