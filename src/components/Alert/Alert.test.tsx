import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from '@components/Alert';

describe('Alert', () => {
  const alertBodyContent = 'Body: Hello world!';
  const alertHeaderContent = 'Header: Hello world!';
  const alertSecondHeader = 'This is a second header';

  describe('Test Alert Variants', () => {
    test('Default Panel', () => {
      const result = render(<Alert>{alertBodyContent}</Alert>);
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-info'
      );
    });

    test('Success Alert', () => {
      const result = render(
        <Alert variant="success">{alertBodyContent}</Alert>
      );
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-success'
      );
    });

    test('Info Alert', () => {
      const result = render(<Alert variant="info">{alertBodyContent}</Alert>);
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-info'
      );
    });

    test('Warning Alert', () => {
      const result = render(
        <Alert variant="warning">{alertBodyContent}</Alert>
      );
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-warning'
      );
    });

    test('Danger Alert', () => {
      const result = render(<Alert variant="danger">{alertBodyContent}</Alert>);
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-danger'
      );
    });

    test('Invalid Alert variant', () => {
      const result = render(<Alert variant="zzzzzz">{alertBodyContent}</Alert>);
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-info'
      );
    });
  });

  describe('Test Alert components', () => {
    test('renders the Alert component', () => {
      render(<Alert>{alertBodyContent}</Alert>);
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
    });

    test('renders the Alert component - with body', () => {
      render(
        <Alert>
          <Alert.Body className="test">{alertBodyContent}</Alert.Body>
        </Alert>
      );
      expect(screen.getByText(alertBodyContent)).toBeInTheDocument();
      expect(screen.getByText(alertBodyContent)).toHaveClass('test');
    });

    test('renders the Alert component - with default header', () => {
      render(
        <Alert>
          <Alert.Header>{alertHeaderContent}</Alert.Header>
          <Alert.Body>{alertBodyContent}</Alert.Body>
        </Alert>
      );
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
        alertHeaderContent
      );
    });

    test('renders the Alert component - with multiple headers', () => {
      render(
        <Alert>
          <Alert.Header level="h1">{alertHeaderContent}</Alert.Header>
          <Alert.Header level="h3">{alertSecondHeader}</Alert.Header>
          <Alert.Body>{alertBodyContent}</Alert.Body>
        </Alert>
      );
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        alertHeaderContent
      );
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
        alertSecondHeader
      );
    });

    test('renders the Alert component - with link', () => {
      const alertLinkContent = 'Link: Hello World!';
      const alertLink = 'Link: Hello World!';
      render(
        <Alert>
          <Alert.Header>{alertHeaderContent}</Alert.Header>
          <Alert.Link href={alertLink}>{alertLinkContent}</Alert.Link>
        </Alert>
      );
      expect(screen.getByRole('link')).toHaveTextContent(alertLinkContent);
      expect(screen.getByRole('link')).toHaveAttribute('href', alertLink);
    });
  });

  describe('Alert visibility', () => {
    test('Hidden Alert', () => {
      const result = render(
        <Alert isVisible={false}>{alertBodyContent}</Alert>
      );
      expect(result.container.querySelector('.alert')).not.toBeInTheDocument();
      expect(screen.queryByText(alertBodyContent)).not.toBeInTheDocument();
    });
  });
});
