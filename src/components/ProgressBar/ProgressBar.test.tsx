import React from 'react';
import { render, screen } from '@testing-library/react';

import ProgressBar from '@components/ProgressBar';

describe('ProgressBar Tests', () => {
  test('renders default ProgressBar', () => {
    const result = render(<ProgressBar />);

    expect(result.container.querySelector('.progress')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemin',
      '0'
    );
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuemax',
      '100'
    );
    expect(screen.getByRole('progressbar')).toHaveAttribute(
      'aria-valuenow',
      '0'
    );
    expect(screen.getByRole('progressbar')).toHaveStyle({ width: '0%' });
  });

  describe('ProgressBar Range Tests', () => {
    test('test correct "now", "min" and "max"', () => {
      const result = render(<ProgressBar now={30} min={20} max={40} />);

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '40'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '30'
      );
      expect(screen.getByRole('progressbar')).toHaveStyle({ width: '50%' });
    });

    test('test "now" less than "min"', () => {
      const result = render(<ProgressBar min={20} now={0} max={100} />);

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '100'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveStyle({ width: '0%' });
    });

    test('test "now" more than "max"', () => {
      const result = render(<ProgressBar min={20} now={70} max={50} />);

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '50'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '50'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'style',
        'width: 100%;'
      );
      expect(screen.getByRole('progressbar')).toHaveStyle({ width: '100%' });
    });

    test('test "min" === "max"', () => {
      const result = render(<ProgressBar min={60} now={0} max={60} />);

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '60'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '60'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '60'
      );
      expect(screen.getByRole('progressbar')).not.toHaveAttribute('style');
    });

    test('test "min" more than "max"', () => {
      const result = render(<ProgressBar min={60} now={0} max={50} />);

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '50'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '50'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '50'
      );
      expect(screen.getByRole('progressbar')).not.toHaveAttribute('style');
    });
  });

  describe('ProgressBar Label Tests', () => {
    const labelPlaceholder = 'test 1234';

    test('test visible label', () => {
      const result = render(
        <ProgressBar now={30} min={20} max={40} label={labelPlaceholder} />
      );

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '40'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '30'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'style',
        'width: 50%;'
      );
      expect(screen.getByText(labelPlaceholder)).not.toHaveClass(
        'visually-hidden'
      );
    });

    test('test hidden label', () => {
      const result = render(
        <ProgressBar
          now={30}
          min={20}
          max={40}
          label={labelPlaceholder}
          isLabelHidden
        />
      );

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '40'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '30'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'style',
        'width: 50%;'
      );
      expect(screen.getByText(labelPlaceholder)).toHaveClass('visually-hidden');
    });
  });

  describe('ProgressBar isChild Tests', () => {
    const labelPlaceholder = 'test 1234';

    test('test isChild enabled', () => {
      const result = render(
        <ProgressBar
          now={30}
          min={20}
          max={40}
          label={labelPlaceholder}
          isChild
        />
      );

      expect(result.container.querySelector('.progress')).toBeNull();
      expect(
        result.container.querySelector('.progress-bar')
      ).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '40'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '30'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'style',
        'width: 50%;'
      );
      expect(screen.getByText(labelPlaceholder)).not.toHaveClass(
        'visually-hidden'
      );
    });

    test('test isChild disabled', () => {
      const result = render(
        <ProgressBar
          now={30}
          min={20}
          max={40}
          label={labelPlaceholder}
          isLabelHidden
          isChild={false}
        />
      );

      expect(result.container.querySelector('.progress')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toHaveClass('progress-bar');
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemin',
        '20'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuemax',
        '40'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'aria-valuenow',
        '30'
      );
      expect(screen.getByRole('progressbar')).toHaveAttribute(
        'style',
        'width: 50%;'
      );
      expect(screen.getByText(labelPlaceholder)).toHaveClass('visually-hidden');
    });
  });
});
