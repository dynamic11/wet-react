import React from 'react';
import { render, screen } from '@testing-library/react';

import Badge from '@components/Badge';

describe('Button', () => {
  const badgeContent = 'Hello world!';
  const badgeLabelContent = 'This is hidden text';
  const className = 'test-class';

  test('renders the Badge component', () => {
    render(<Badge>{badgeContent}</Badge>);
    expect(screen.getByText(badgeContent)).toBeInTheDocument();
    expect(screen.getByText(badgeContent)).toHaveClass('badge');
  });

  test('renders the Badge component with badgeLabel', () => {
    render(<Badge badgeLabel={badgeLabelContent}>{badgeContent}</Badge>);
    expect(screen.getByText(badgeContent)).toBeInTheDocument();
    expect(screen.getByText(badgeLabelContent)).toBeInTheDocument();
    expect(screen.getByText(badgeLabelContent)).toHaveClass('wb-inv');
  });

  test('hide Badge component using visibility', () => {
    render(
      <Badge badgeLabel={badgeLabelContent} visible={false}>
        {badgeContent}
      </Badge>
    );
    expect(screen.queryByText(badgeContent)).not.toBeInTheDocument();
    expect(screen.queryByText(badgeLabelContent)).not.toBeInTheDocument();
  });

  test('check for custom className', () => {
    render(<Badge className={className}>{badgeContent}</Badge>);
    expect(screen.queryByText(badgeContent)).toHaveClass(className);
  });
});
