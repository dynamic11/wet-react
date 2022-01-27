import React from 'react';
import { render, screen } from '@testing-library/react';

import ButtonGroup from '@components/ButtonGroup';
import Button from '@components/Button';

describe('Button Group', () => {
  const ButtonText1 = 'Button 1: Hello world!';
  const ButtonText2 = 'Button 2: Hello world!';
  const ButtonText3 = 'Button 3: Hello world!';

  describe('ButtonGroup Orientation', () => {
    test('Default ButtonGroup orientation', () => {
      render(
        <ButtonGroup>
          <Button>{ButtonText1}</Button>
          <Button>{ButtonText2}</Button>
          <Button>{ButtonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByText(ButtonText1)).toHaveClass('btn');
      expect(screen.getByText(ButtonText2)).toHaveClass('btn');
      expect(screen.getByText(ButtonText3)).toHaveClass('btn');
    });

    test('Horizontal ButtonGroup orientation', () => {
      render(
        <ButtonGroup isVertical={false}>
          <Button>{ButtonText1}</Button>
          <Button>{ButtonText2}</Button>
          <Button>{ButtonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).not.toHaveClass('btn-group-vertical');
      expect(screen.getByText(ButtonText1)).toHaveClass('btn');
      expect(screen.getByText(ButtonText2)).toHaveClass('btn');
      expect(screen.getByText(ButtonText3)).toHaveClass('btn');
    });

    test('Vertical ButtonGroup orientation', () => {
      render(
        <ButtonGroup isVertical>
          <Button>{ButtonText1}</Button>
          <Button>{ButtonText2}</Button>
          <Button>{ButtonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group-vertical');
      expect(screen.getByText(ButtonText1)).toHaveClass('btn');
      expect(screen.getByText(ButtonText2)).toHaveClass('btn');
      expect(screen.getByText(ButtonText3)).toHaveClass('btn');
    });
  });

  describe('ButtonGroup Sizing', () => {
    test('Default ButtonGroup size', () => {
      render(
        <ButtonGroup>
          <Button>{ButtonText1}</Button>
          <Button>{ButtonText2}</Button>
          <Button>{ButtonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).not.toHaveClass('btn-group-lg');
      expect(screen.getByRole('group')).not.toHaveClass('btn-group-sm');
      expect(screen.getByText(ButtonText1)).toHaveClass('btn');
      expect(screen.getByText(ButtonText2)).toHaveClass('btn');
      expect(screen.getByText(ButtonText3)).toHaveClass('btn');
    });

    test('Large ButtonGroup size', () => {
      render(
        <ButtonGroup size="lg">
          <Button>{ButtonText1}</Button>
          <Button>{ButtonText2}</Button>
          <Button>{ButtonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).toHaveClass('btn-group-lg');
      expect(screen.getByText(ButtonText1)).toHaveClass('btn');
      expect(screen.getByText(ButtonText2)).toHaveClass('btn');
      expect(screen.getByText(ButtonText3)).toHaveClass('btn');
    });

    test('Small ButtonGroup size', () => {
      render(
        <ButtonGroup size="sm">
          <Button>{ButtonText1}</Button>
          <Button>{ButtonText2}</Button>
          <Button>{ButtonText3}</Button>
        </ButtonGroup>
      );
      expect(screen.getAllByRole('button')).toHaveLength(3);
      expect(screen.getByRole('group')).toHaveClass('btn-group');
      expect(screen.getByRole('group')).toHaveClass('btn-group-sm');
      expect(screen.getByText(ButtonText1)).toHaveClass('btn');
      expect(screen.getByText(ButtonText2)).toHaveClass('btn');
      expect(screen.getByText(ButtonText3)).toHaveClass('btn');
    });
  });
});
