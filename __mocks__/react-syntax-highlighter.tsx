import React from 'react';

export interface CodeBlockProps {
  children?: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Prism = ({ children }: CodeBlockProps) => <code>{children}</code>;
