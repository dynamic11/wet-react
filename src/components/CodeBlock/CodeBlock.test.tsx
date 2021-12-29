import React from 'react';
import { render, screen } from '@testing-library/react';

import CodeBlock from '@components/CodeBlock';

describe('CodeClock', () => {
  test('render CodeBlock component', () => {
    const codeContent = '<h1>Hello Text</h1>';
    render(<CodeBlock>{codeContent}</CodeBlock>);
    expect(screen.getByText(codeContent)).toBeInTheDocument();
  });
});
