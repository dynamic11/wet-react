import React from 'react';
import { render, screen } from '@testing-library/react';

import CodeBlock from '.';

describe('CodeClock', () => {
  test('render CodeBlock component', () => {
    const codeContent = '<h1>Hello Text</h1>';
    render(<CodeBlock language="markdown">{codeContent}</CodeBlock>);
    expect(screen.getByText(codeContent)).toBeInTheDocument();
  });
});
