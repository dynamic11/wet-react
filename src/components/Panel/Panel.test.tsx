import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Panel from '@components/Panel';

describe('Panel Tests', () => {
  describe('Test Panel style variants', () => {
    const PanelContent = 'Hello world!';

    test('Default Button', () => {
      render(<Panel id="panel-test">{PanelContent}</Panel>);
      expect(screen.getByText(PanelContent)).toHaveClass('btn btn-default');
      expect(screen.getByRole('button')).toHaveClass('btn btn-default');
    });
  });
});
