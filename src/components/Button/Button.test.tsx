import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from '@components/Button';

describe('Button Tests', () => {
  test('Test Button component', () => {
    const buttonContent = 'Hello world!';

    render(<Button>{buttonContent}</Button>);
    expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
    expect(screen.getByRole('button')).toHaveClass('btn btn-default');
  });

  describe('Test Button style variants', () => {
    const buttonContent = 'Hello world!';

    test('Default Button', () => {
      render(<Button variant="default">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-default');
    });

    test('Primary Button', () => {
      render(<Button variant="primary">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-primary');
    });

    test('Danger Button', () => {
      render(<Button variant="danger">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-danger');
    });

    test('Success Button', () => {
      render(<Button variant="success">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-success');
    });

    test('Warning Button', () => {
      render(<Button variant="warning">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-warning');
    });

    test('info Button', () => {
      render(<Button variant="info">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-info');
    });

    test('link Button', () => {
      render(<Button variant="link">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-link');
    });
  });

  describe('Test Button size variants', () => {
    const buttonContent = 'Hello world!';

    test('large', () => {
      render(<Button size="lg">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-default btn-lg');
    });

    test('small size', () => {
      render(<Button size="sm">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-default btn-sm');
    });

    test('extra small size', () => {
      render(<Button size="xs">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-default btn-xs');
    });

    test('full width button', () => {
      render(
        <Button size="xs" block>
          {buttonContent}
        </Button>
      );
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass(
        'btn btn-default btn-block'
      );
    });
  });

  describe('Active/Disable State Button Tests', () => {
    const buttonContent = 'Hello world!';

    test('Active State', () => {
      render(<Button active>{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveClass('btn btn-default active');
    });

    test('Disabled State', () => {
      render(<Button disabled>{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Button Types/Tags', () => {
    const buttonContent = 'Hello world!';

    test('Default Button Type', () => {
      render(<Button>{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    test('Submit Button', () => {
      render(<Button type="submit">{buttonContent}</Button>);
      expect(screen.getByRole('button')).toHaveTextContent(buttonContent);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    test('Button as Input', () => {
      render(<Button as="input" type="button" value="Input" />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
      expect(screen.getByRole('button')).toHaveAttribute('role', 'button');
      expect(screen.getByRole('button')).toHaveAttribute('value', 'Input');
    });

    test('Submit as Input', () => {
      render(<Button as="input" type="submit" value="Submit" />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
      expect(screen.getByRole('button')).toHaveAttribute('role', 'button');
      expect(screen.getByRole('button')).toHaveAttribute('value', 'Submit');
    });

    test('Reset as Input', () => {
      render(<Button as="input" type="reset" value="Reset" />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
      expect(screen.getByRole('button')).toHaveAttribute('role', 'button');
      expect(screen.getByRole('button')).toHaveAttribute('value', 'Reset');
    });

    test('Button as Link', () => {
      render(<Button href="https://google.com">link</Button>);
      expect(
        screen.getByRole('button', { name: /link/i }).closest('a')
      ).toHaveAttribute('href', 'https://google.com');
    });
  });

  describe('Button Actions', () => {
    test('Click on Button', () => {
      const mockOnClick = jest.fn();
      render(<Button onClick={mockOnClick()}>click me</Button>);
      fireEvent.click(screen.getByText(/click me/i));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
