import React from 'react';
import { render, screen } from '@testing-library/react';

import Link from '@components/Link';

describe('Link Tests', () => {
  const linkAddress = 'https://www.google.com/';
  const linkMessage = 'Hello World';

  test('renders text link', () => {
    render(<Link href={linkAddress}>{linkMessage}</Link>);
    expect(screen.getByRole('link')).toHaveTextContent(linkMessage);
    expect(screen.getByRole('link')).toHaveAttribute('href', linkAddress);
  });

  test('link relationship', () => {
    const LinkRel = 'noreferrer';
    render(
      <Link href={linkAddress} rel={LinkRel}>
        {linkMessage}
      </Link>
    );
    expect(screen.getByRole('link')).toHaveTextContent(linkMessage);
    expect(screen.getByRole('link')).toHaveAttribute('rel', LinkRel);
  });

  describe('Link Target Tests', () => {
    test('valid link target: _blank', () => {
      const linkTarget = '_blank';
      render(
        <Link href="https://www.google.com/" target={linkTarget}>
          {linkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(linkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', linkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', linkTarget);
    });

    test('valid link target: _self', () => {
      const linkTarget = '_self';
      render(
        <Link href="https://www.google.com/" target={linkTarget}>
          {linkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(linkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', linkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', linkTarget);
    });

    test('valid link target: _parent', () => {
      const linkTarget = '_parent';
      render(
        <Link href="https://www.google.com/" target={linkTarget}>
          {linkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(linkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', linkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', linkTarget);
    });

    test('valid link target: _top', () => {
      const linkTarget = '_top';
      render(
        <Link href="https://www.google.com/" target={linkTarget}>
          {linkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(linkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', linkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', linkTarget);
    });
  });
});
