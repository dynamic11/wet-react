import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';

describe('Text', () => {
  test('renders sample text', () => {
    render(<Text>Hello world!</Text>);
  });
});
