import React from 'react';
import { render, screen } from '@testing-library/react';

import Link from '@components/Link';

describe('Link Tests', () => {
  const LinkAddress = 'https://www.google.com/';
  const LinkMessage = 'Hello World';

  test('renders text link', () => {
    render(<Link href={LinkAddress}>{LinkMessage}</Link>);
    expect(screen.getByRole('link')).toHaveTextContent(LinkMessage);
    expect(screen.getByRole('link')).toHaveAttribute('href', LinkAddress);
  });

  test('link relationship', () => {
    const LinkRel = 'noreferrer';
    render(
      <Link href={LinkAddress} rel={LinkRel}>
        {LinkMessage}
      </Link>
    );
    expect(screen.getByRole('link')).toHaveTextContent(LinkMessage);
    expect(screen.getByRole('link')).toHaveAttribute('rel', LinkRel);
  });

  describe('Link Target Tests', () => {
    test('valid link target: _blank', () => {
      const LinkTarget = '_blank';
      render(
        <Link href="https://www.google.com/" target={LinkTarget}>
          {LinkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(LinkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', LinkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', LinkTarget);
    });

    test('valid link target: _self', () => {
      const LinkTarget = '_self';
      render(
        <Link href="https://www.google.com/" target={LinkTarget}>
          {LinkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(LinkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', LinkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', LinkTarget);
    });

    test('valid link target: _parent', () => {
      const LinkTarget = '_parent';
      render(
        <Link href="https://www.google.com/" target={LinkTarget}>
          {LinkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(LinkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', LinkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', LinkTarget);
    });

    test('valid link target: _top', () => {
      const LinkTarget = '_top';
      render(
        <Link href="https://www.google.com/" target={LinkTarget}>
          {LinkMessage}
        </Link>
      );
      expect(screen.getByRole('link')).toHaveTextContent(LinkMessage);
      expect(screen.getByRole('link')).toHaveAttribute('href', LinkAddress);
      expect(screen.getByRole('link')).toHaveAttribute('target', LinkTarget);
    });
  });
});
