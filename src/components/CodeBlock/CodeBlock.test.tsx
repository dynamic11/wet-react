import React from 'react';
import { render } from '@testing-library/react';

import CodeBlock from '.';

describe('CodeClock', () => {
  test('render CodeBlock component', () => {
    render(<CodeBlock language="markdown">{'<h1>Hello Text</h1>'}</CodeBlock>);
  });
  // test('render CodeBlock with line numbers', () => {
  //   render(
  //     <CodeBlock language="markdown" showLineNumbers>
  //       {'<h1>Hello Text</h1>'}
  //     </CodeBlock>
  //   );
  // });
  // test('render CodeBlock with line numbers', () => {
  //   render(
  //     <CodeBlock language="markdown" showLineNumbers>
  //       {'<h1>Hello Text</h1>'}
  //     </CodeBlock>
  //   );
  // });
  // test('render CodeBlock with custom line numbers', () => {
  //   render(
  //     <CodeBlock language="markdown" showLineNumbers startingLineNumber={12}>
  //       {'<h1>Hello Text</h1>'}
  //     </CodeBlock>
  //   );
  // });
});
