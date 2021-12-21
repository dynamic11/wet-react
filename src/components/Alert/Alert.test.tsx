import React from 'react';
import { render } from '@testing-library/react';

import Alert from '@components/Alert';

describe('Alert', () => {
  test('renders the Alert component', () => {
    render(<Alert message="Hello world!" />);
  });
});
