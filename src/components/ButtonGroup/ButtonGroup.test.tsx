import React from 'react';
import { render, screen } from '@testing-library/react';

import ButtonGroup from '@components/ButtonGroup';
import Button from '@components/Button';

describe('Button Group', () => {
  const buttonText1 = 'Button 1: Hello world!';
  const buttonText2 = 'Button 2: Hello world!';
  const buttonText3 = 'Button 3: Hello world!';

  describe('ButtonGroup Orientation', () => {
    test('Default ButtonGroup orientation', () => {
      render(
        <ButtonGroup>
          <Button>{buttonText1}</Button>
          <Button>{buttonText2}</Button>
          <Button>{buttonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByText(buttonText1)).toHaveClass('btn');
      expect(screen.getByText(buttonText2)).toHaveClass('btn');
      expect(screen.getByText(buttonText3)).toHaveClass('btn');
    });

    test('Horizontal ButtonGroup orientation', () => {
      render(
        <ButtonGroup isVertical={false}>
          <Button>{buttonText1}</Button>
          <Button>{buttonText2}</Button>
          <Button>{buttonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).not.toHaveClass('btn-group-vertical');
      expect(screen.getByText(buttonText1)).toHaveClass('btn');
      expect(screen.getByText(buttonText2)).toHaveClass('btn');
      expect(screen.getByText(buttonText3)).toHaveClass('btn');
    });

    test('Vertical ButtonGroup orientation', () => {
      render(
        <ButtonGroup isVertical>
          <Button>{buttonText1}</Button>
          <Button>{buttonText2}</Button>
          <Button>{buttonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group-vertical');
      expect(screen.getByText(buttonText1)).toHaveClass('btn');
      expect(screen.getByText(buttonText2)).toHaveClass('btn');
      expect(screen.getByText(buttonText3)).toHaveClass('btn');
    });
  });

  describe('ButtonGroup Sizing', () => {
    test('Default ButtonGroup size', () => {
      render(
        <ButtonGroup>
          <Button>{buttonText1}</Button>
          <Button>{buttonText2}</Button>
          <Button>{buttonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).not.toHaveClass('btn-group-lg');
      expect(screen.getByRole('group')).not.toHaveClass('btn-group-sm');
      expect(screen.getByText(buttonText1)).toHaveClass('btn');
      expect(screen.getByText(buttonText2)).toHaveClass('btn');
      expect(screen.getByText(buttonText3)).toHaveClass('btn');
    });

    test('Large ButtonGroup size', () => {
      render(
        <ButtonGroup size="lg">
          <Button>{buttonText1}</Button>
          <Button>{buttonText2}</Button>
          <Button>{buttonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).toHaveClass('btn-group-lg');
      expect(screen.getByText(buttonText1)).toHaveClass('btn');
      expect(screen.getByText(buttonText2)).toHaveClass('btn');
      expect(screen.getByText(buttonText3)).toHaveClass('btn');
    });

    test('Small ButtonGroup size', () => {
      render(
        <ButtonGroup size="sm">
          <Button>{buttonText1}</Button>
          <Button>{buttonText2}</Button>
          <Button>{buttonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).toHaveClass('btn-group-sm');
      expect(screen.getByText(buttonText1)).toHaveClass('btn');
      expect(screen.getByText(buttonText2)).toHaveClass('btn');
      expect(screen.getByText(buttonText3)).toHaveClass('btn');
    });
  });
});
