import React from 'react';
import { render } from '@testing-library/react';

import Alert from '@components/Alert';

describe('Alert', () => {
  test('renders the Alert component', () => {
    render(<Alert>hello world</Alert>);
  });
  test('renders the Alert component - with body', () => {
    render(
      <Alert>
        <Alert.Body>hello world</Alert.Body>
      </Alert>
    );
  });
  test('renders the Alert component - with header', () => {
    render(
      <Alert>
        <Alert.Header>hello world</Alert.Header>
        <Alert.Body>hello world</Alert.Body>
      </Alert>
    );
  });
  test('renders the Alert component - with link', () => {
    render(
      <Alert>
        <Alert.Header>hello world</Alert.Header>
        <Alert.Link href="www.google.com">hello world</Alert.Link>
      </Alert>
    );
  });
});
