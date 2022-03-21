import React from 'react';
import { render, screen } from '@testing-library/react';

import Text from '@components/Text';

describe('Text Tests', () => {
  const textMessage = 'Hello World';

  test('Render text', () => {
    render(<Text>{textMessage}</Text>);
    expect(screen.getByText(textMessage)).toBeTruthy();
  });

  describe('Text Color', () => {
    test('Default color', () => {
      render(<Text>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
    });

    test('Primary color', () => {
      render(<Text color="primary">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('text-primary');
    });

    test('Info color', () => {
      render(<Text color="info">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('text-info');
    });

    test('Muted color', () => {
      render(<Text color="muted">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('text-muted');
    });

    test('Success color', () => {
      render(<Text color="success">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('text-success');
    });

    test('Warning color', () => {
      render(<Text color="warning">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('text-warning');
    });

    test('Danger color', () => {
      render(<Text color="danger">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('text-danger');
    });
  });

  describe('Text Background Color', () => {
    test('Primary color', () => {
      render(<Text backgroundColor="primary">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('bg-primary');
    });

    test('Info color', () => {
      render(<Text backgroundColor="info">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('bg-info');
    });

    test('Success color', () => {
      render(<Text backgroundColor="success">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('bg-success');
    });

    test('Warning color', () => {
      render(<Text backgroundColor="warning">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('bg-warning');
    });

    test('Danger color', () => {
      render(<Text backgroundColor="danger">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('bg-danger');
    });
  });

  describe('Text Size', () => {
    test('h1 Size', () => {
      render(<Text size="h1">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('h1');
    });

    test('h2 Size', () => {
      render(<Text size="h2">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('h2');
    });

    test('h3 Size', () => {
      render(<Text size="h3">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('h3');
    });

    test('h4 Size', () => {
      render(<Text size="h4">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('h4');
    });

    test('h5 Size', () => {
      render(<Text size="h5">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('h5');
    });

    test('h6 Size', () => {
      render(<Text size="h6">{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('h6');
    });

    test('Lead', () => {
      render(<Text lead>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(screen.getByText(textMessage)).toHaveClass('lead');
    });

    test('Small Size', () => {
      const result = render(<Text small>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('small')).toHaveTextContent(
        textMessage
      );
    });
  });

  describe('Text Style', () => {
    test('Highlight (mark)', () => {
      const result = render(<Text mark>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('mark')).toHaveTextContent(
        textMessage
      );
    });

    test('Code', () => {
      const result = render(<Text code>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('code')).toHaveTextContent(
        textMessage
      );
    });

    test('Keyboard', () => {
      const result = render(<Text keyboard>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('kbd')).toHaveTextContent(
        textMessage
      );
    });

    test('Deleted', () => {
      const result = render(<Text deleted>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('del')).toHaveTextContent(
        textMessage
      );
    });

    test('Strikethrough', () => {
      const result = render(<Text strikethrough>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('s')).toHaveTextContent(
        textMessage
      );
    });

    test('Strong', () => {
      const result = render(<Text strong>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('strong')).toHaveTextContent(
        textMessage
      );
    });

    test('Italic', () => {
      const result = render(<Text italic>{textMessage}</Text>);
      expect(screen.getByText(textMessage)).toBeTruthy();
      expect(result.container.querySelector('i')).toHaveTextContent(
        textMessage
      );
    });
  });
});
