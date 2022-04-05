import React from 'react';
import { render } from '@testing-library/react';

import Meter from '@components/Meter';

describe('Meter Tests', () => {
  describe('Meter set value tests', () => {
    test('Test Meter min value', () => {
      const target = render(<Meter min={10} max={101} value={37} />);
      expect(target.container.firstChild).toHaveAttribute('min', '10');
    });
    test('Test max value', () => {
      const target = render(<Meter min={10} max={101} value={37} />);
      expect(target.container.firstChild).toHaveAttribute('max', '101');
    });
    test('Test current value', () => {
      const target = render(<Meter min={10} max={101} value={37} />);
      expect(target.container.firstChild).toHaveAttribute('value', '37');
    });
    test('Test low value', () => {
      const target = render(<Meter min={10} max={101} value={37} low={30} />);
      expect(target.container.firstChild).toHaveAttribute('low', '30');
    });
    test('Test high value', () => {
      const target = render(<Meter min={10} max={101} value={37} high={60} />);
      expect(target.container.firstChild).toHaveAttribute('high', '60');
    });
  });
  describe('Test for illogical inputs', () => {
    test('Test low is less than min', () => {
      const target = render(
        <Meter min={10} max={101} value={37} low={0} high={60} />
      );
      expect(target.container.firstChild).toHaveAttribute('low', '10');
      expect(target.container.firstChild).toHaveAttribute('min', '10');
    });
    test('Test high is greater than max', () => {
      const target = render(
        <Meter min={10} max={101} value={37} low={20} high={600} />
      );
      expect(target.container.firstChild).toHaveAttribute('high', '101');
      expect(target.container.firstChild).toHaveAttribute('max', '101');
    });
    test('Test min is greater than max', () => {
      const target = render(
        <Meter min={105} max={101} value={37} low={0} high={60} />
      );
      expect(target.container.firstChild).toHaveAttribute('min', '101');
      expect(target.container.firstChild).toHaveAttribute('max', '101');
    });
    test('Test value is less than min', () => {
      const target = render(
        <Meter min={10} max={101} value={0} low={20} high={60} />
      );
      expect(target.container.firstChild).toHaveAttribute('value', '10');
      expect(target.container.firstChild).toHaveAttribute('min', '10');
    });
    test('Test value is more than max', () => {
      const target = render(
        <Meter min={10} max={101} value={311117} low={0} high={600} />
      );
      expect(target.container.firstChild).toHaveAttribute('high', '101');
      expect(target.container.firstChild).toHaveAttribute('max', '101');
      expect(target.container.firstChild).toHaveAttribute('value', '101');
    });
  });
  describe('Test default values', () => {
    test('Test default min', () => {
      const target = render(<Meter max={100} />);
      expect(target.container.firstChild).toHaveAttribute('min', '0');
    });
    test('Test default max', () => {
      const target = render(<Meter value={100} />);
      expect(target.container.firstChild).toHaveAttribute('max', '100');
    });
    test('Test default value', () => {
      const target = render(<Meter max={100} />);
      expect(target.container.firstChild).toHaveAttribute('value', '0');
    });
    test('Test default low', () => {
      const target = render(<Meter max={100} />);
      expect(target.container.firstChild).toHaveAttribute('low', '0');
    });
    test('Test default high', () => {
      const target = render(<Meter max={100} />);
      expect(target.container.firstChild).toHaveAttribute('high', '100');
    });
  });
});
