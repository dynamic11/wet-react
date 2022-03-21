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
      test('Test default Form check type', () => {
        render(
          <Form>
            <Form.Check label="Target" />
          </Form>
        );
        expect(
          screen.getByRole('checkbox').parentElement?.parentElement
        ).toHaveClass('checkbox');
      });
      test('Test Invalid property', () => {
        render(
          <Form>
            <Form.Check
              isInvalid
              isRequired
              type="checkbox"
              label="TestTarget"
            />
          </Form>
        );
        expect(screen.getByRole('checkbox')).toHaveAttribute(
          'aria-invalid',
          'true'
        );
      });
      test('Test isRequired property', () => {
        render(
          <Form>
            <Form.Check isRequired type="radio" label="aTest" />
          </Form>
        );
        expect(screen.getByRole('radio')).toHaveAttribute(
          'aria-required',
          'true'
        );
      });
      test('Test required styling', () => {
        render(
          <Form>
            <Form.Check
              isRequired
              type="checkbox"
              showRequiredStyling
              label="target1"
            />
            <Form.Check
              isRequired
              type="checkbox"
              showRequiredStyling={false}
              label="target2"
            />
          </Form>
        );
        expect(
          screen.getAllByRole('checkbox').at(0)?.parentElement?.parentElement
        ).toHaveClass('required');
        expect(
          screen.getAllByRole('checkbox').at(1)?.parentElement?.parentElement
        ).not.toHaveClass('required');
      });
    });
  });
});
