import React from 'react';
import { render } from '@testing-library/react';

import Label from './Label';

describe('Label', () => {
  test('renders the default Label component', () => {
    render(<Label>Hello world!</Label>);
  });
  test('renders the primary Label component', () => {
    render(<Label variant="primary">Hello world!</Label>);
  });
  test('renders the success Label component', () => {
    render(<Label variant="success">Hello world!</Label>);
  });
  test('renders the danger Label component', () => {
    render(<Label variant="danger">Hello world!</Label>);
  });
  test('renders the warning Label component', () => {
    render(<Label variant="warning">Hello world!</Label>);
  });
  test('renders the info Label component', () => {
    render(<Label variant="info">Hello world!</Label>);
  });
  test('visible Label component', () => {
    render(
      <Label visible variant="warning">
        Hello world!
      </Label>
    );
  });
  test('hidden Label component', () => {
    render(
      <Label visible={false} variant="warning">
        Hello world!
      </Label>
    );
  });
});
