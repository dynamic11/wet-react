import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '@components/Form';

describe('Form Tests', () => {
  describe('Form Check Tests', () => {
    describe('Form Check Props Tests', () => {
      test('disabled form check', () => {
        render(
          <Form>
            <Form.Check isDisabled type="checkbox" label="testTarget" />
          </Form>
        );
        expect(screen.getByRole('checkbox')).toHaveAttribute('disabled', '');
      });
      test('Enabled form check', () => {
        render(
          <Form>
            <Form.Check isDisabled={false} type="checkbox" label="testTarget" />
          </Form>
        );
        expect(screen.getByRole('checkbox')).not.toHaveAttribute('disabled');
      });
      test('form check type', () => {
        render(
          <>
            <Form>
              <Form.Check
                isDisabled={false}
                type="checkbox"
                label="testTarget"
              />
            </Form>
            <Form>
              <Form.Check type="radio" label="testTarget2" />
            </Form>
          </>
        );
        expect(
          screen.getByRole('checkbox').parentElement?.parentElement
        ).toHaveClass('checkbox');
        expect(
          screen.getByRole('radio').parentElement?.parentElement
        ).toHaveClass('radio');
      });
    });
  });
});
