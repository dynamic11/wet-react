import React from 'react';

export interface codeBlockProps {
  /** Contents of CodeBlock */
  children?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Prism = ({ children, ...props }: codeBlockProps) => (
  <code {...props}>{children}</code>
);
