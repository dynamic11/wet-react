import React from 'react';
import { render, screen } from '@testing-library/react';

import Alert from '@components/Alert';

describe('Alert', () => {
  const AlertBodyContent = 'Body: Hello world!';
  const AlertHeaderContent = 'Header: Hello world!';

  describe('Test Alert Variants', () => {
    test('Default Panel', () => {
      const result = render(<Alert>{AlertBodyContent}</Alert>);
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-info'
      );
    });

    test('Success Alert', () => {
      const result = render(
        <Alert variant="success">{AlertBodyContent}</Alert>
      );
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-success'
      );
    });

    test('Info Alert', () => {
      const result = render(<Alert variant="info">{AlertBodyContent}</Alert>);
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-info'
      );
    });

    test('Warning Alert', () => {
      const result = render(
        <Alert variant="warning">{AlertBodyContent}</Alert>
      );
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-warning'
      );
    });

    test('Danger Alert', () => {
      const result = render(<Alert variant="danger">{AlertBodyContent}</Alert>);
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-danger'
      );
    });

    test('Invalid Alert variant', () => {
      const result = render(<Alert variant="zzzzzz">{AlertBodyContent}</Alert>);
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
      expect(result.container.querySelector('.alert')).toHaveClass(
        'alert-info'
      );
    });
  });

  describe('Test Alert components', () => {
    test('renders the Alert component', () => {
      render(<Alert>{AlertBodyContent}</Alert>);
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
    });

    test('renders the Alert component - with body', () => {
      render(
        <Alert>
          <Alert.Body className="test">{AlertBodyContent}</Alert.Body>
        </Alert>
      );
      expect(screen.getByText(AlertBodyContent)).toBeInTheDocument();
      expect(screen.getByText(AlertBodyContent)).toHaveClass('test');
    });

    test('renders the Alert component - with default header', () => {
      render(
        <Alert>
          <Alert.Header>{AlertHeaderContent}</Alert.Header>
          <Alert.Body>{AlertBodyContent}</Alert.Body>
        </Alert>
      );
      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
        AlertHeaderContent
      );
    });

    test('renders the Alert component - with multiple headers', () => {
      const AlertSecondHeader = 'This is a second header';
      render(
        <Alert>
          <Alert.Header level="h1">{AlertHeaderContent}</Alert.Header>
          <Alert.Header level="h3">{AlertSecondHeader}</Alert.Header>
          <Alert.Body>{AlertBodyContent}</Alert.Body>
        </Alert>
      );
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        AlertHeaderContent
      );
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
        AlertSecondHeader
      );
    });

    test('renders the Alert component - with link', () => {
      const AlertLinkContent = 'Link: Hello World!';
      const AlertLink = 'Link: Hello World!';
      render(
        <Alert>
          <Alert.Header>{AlertHeaderContent}</Alert.Header>
          <Alert.Link href={AlertLink}>{AlertLinkContent}</Alert.Link>
        </Alert>
      );
      expect(screen.getByRole('link')).toHaveTextContent(AlertLinkContent);
      expect(screen.getByRole('link')).toHaveAttribute('href', AlertLink);
    });
  });

  describe('Alert visibility', () => {
    test('Hidden Alert', () => {
      const result = render(
        <Alert isVisible={false}>{AlertBodyContent}</Alert>
      );
      expect(result.container.querySelector('.alert')).not.toBeInTheDocument();
      expect(screen.queryByText(AlertBodyContent)).not.toBeInTheDocument();
    });
  });
});
