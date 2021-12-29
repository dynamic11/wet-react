import React from 'react';
import { render, screen } from '@testing-library/react';

import Badge from '@components/Badge';

describe('Button', () => {
  test('renders the Badge component', () => {
    const badgeContent = 'Hello world!';
    render(<Badge>{badgeContent}</Badge>);
    expect(screen.getByText(badgeContent)).toBeInTheDocument();
    expect(screen.getByText(badgeContent)).toHaveClass('badge');
  });

  test('renders the Badge component with badgeLabel', () => {
    const badgeContent = 'Hello world!';
    const badgeLabelContent = 'This is hidden text';
    render(<Badge badgeLabel={badgeLabelContent}>{badgeContent}</Badge>);
    expect(screen.getByText(badgeContent)).toBeInTheDocument();
    expect(screen.getByText(badgeLabelContent)).toBeInTheDocument();
    expect(screen.getByText(badgeLabelContent)).toHaveClass('wb-inv');
  });

  test('hide Badge component using visibility', () => {
    const badgeContent = 'Hello world!';
    const badgeLabelContent = 'This is hidden text';
    render(
      <Badge badgeLabel={badgeLabelContent} visible={false}>
        {badgeContent}
      </Badge>
    );
    expect(screen.queryByText(badgeContent)).not.toBeInTheDocument();
    expect(screen.queryByText(badgeLabelContent)).not.toBeInTheDocument();
  });

  test('check for custom className', () => {
    const badgeContent = 'Hello world!';
    const className = 'test-class';
    render(<Badge className={className}>{badgeContent}</Badge>);
    expect(screen.queryByText(badgeContent)).toHaveClass(className);
  });
});
