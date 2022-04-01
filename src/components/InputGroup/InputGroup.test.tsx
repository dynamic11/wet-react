import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputGroup from '@components/InputGroup';
import { Form } from '..';

describe('InputGroup tests', () => {
  describe('InputGroup size tests', () => {
    test('Large InputGroup test', () => {
      render(
        <InputGroup size="lg">
          <InputGroup.Text id="test target">Username:</InputGroup.Text>
          <Form.Control
            type="text"
            isRequired
            placeholder="Gonna be tested"
            aria-describedby="test target"
          />
        </InputGroup>
      );
      expect(screen.getByRole('textbox').parentElement).toHaveClass(
        'input-group-lg'
      );
    });
    test('Small InputGroup test', () => {
      render(
        <InputGroup size="sm">
          <InputGroup.Text id="test target">Username:</InputGroup.Text>
          <Form.Control
            type="text"
            isRequired
            placeholder="Gonna be tested"
            aria-describedby="test target"
          />
        </InputGroup>
      );
      expect(screen.getByRole('textbox').parentElement).toHaveClass(
        'input-group-sm'
      );
    });
    test('Default size InputGroup test', () => {
      render(
        <InputGroup>
          <InputGroup.Text id="test target">Username:</InputGroup.Text>
          <Form.Control
            type="text"
            isRequired
            placeholder="Gonna be tested"
            aria-describedby="test target"
          />
        </InputGroup>
      );
      expect(screen.getByRole('textbox').parentElement).not.toHaveClass(
        'input-group-lg'
      );
      expect(screen.getByRole('textbox').parentElement).not.toHaveClass(
        'input-group-sm'
      );
    });
  });
  describe('InputGroup text tests', () => {
    test('id value test', () => {
      render(
        <InputGroup>
          <InputGroup.Text id="test target">Username:</InputGroup.Text>
          <Form.Control
            type="text"
            isInvalid
            placeholder="Gonna be tested"
            aria-describedby="test target"
          />
        </InputGroup>
      );
      expect(
        screen.getByRole('textbox').parentElement?.firstChild
      ).toHaveAttribute('id', 'test target');
    });
  });
});
