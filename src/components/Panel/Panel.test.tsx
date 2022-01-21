import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Panel from '@components/Panel';

describe('Panel Tests', () => {
  describe('Test Panel style variants', () => {
    const PanelContent = 'Hello world!';

    test('Default Panel', () => {
      const result = render(<Panel>{PanelContent}</Panel>);
      expect(result.container.querySelector('.panel')).toHaveClass(
        'panel-info'
      );
      expect(screen.getByText(PanelContent)).toHaveClass('panel-body');
    });

    test('Success Panel', () => {
      const result = render(<Panel variant="success">{PanelContent}</Panel>);
      expect(result.container.querySelector('.panel')).toHaveClass(
        'panel-success'
      );
      expect(screen.getByText(PanelContent)).toHaveClass('panel-body');
    });

    test('Info Panel', () => {
      const result = render(<Panel variant="info">{PanelContent}</Panel>);
      expect(result.container.querySelector('.panel')).toHaveClass(
        'panel-info'
      );
      expect(screen.getByText(PanelContent)).toHaveClass('panel-body');
    });

    test('Warning Panel', () => {
      const result = render(<Panel variant="warning">{PanelContent}</Panel>);
      expect(result.container.querySelector('.panel')).toHaveClass(
        'panel-warning'
      );
      expect(screen.getByText(PanelContent)).toHaveClass('panel-body');
    });

    test('Danger Panel', () => {
      const result = render(<Panel variant="danger">{PanelContent}</Panel>);
      expect(result.container.querySelector('.panel')).toHaveClass(
        'panel-danger'
      );
      expect(screen.getByText(PanelContent)).toHaveClass('panel-body');
    });

    test('Invalid Panel variant', () => {
      const result = render(<Panel variant="zzzzzz">{PanelContent}</Panel>);
      expect(result.container.querySelector('.panel')).toHaveClass(
        'panel-info'
      );
      expect(screen.getByText(PanelContent)).toHaveClass('panel-body');
    });
  });

  describe('Test Panel sections', () => {
    const PanelBodyContent = 'Body: Hello world!';
    const PanelHeaderContent = 'Header: Hello world!';
    const PanelFooterContent = 'Footer: Hello world!';

    test('Panel Body', () => {
      render(<Panel>{PanelBodyContent}</Panel>);
      expect(screen.getByText(PanelBodyContent)).toHaveClass('panel-body');
    });

    test('Panel Header', () => {
      render(
        <Panel headerContent={PanelHeaderContent}>{PanelBodyContent}</Panel>
      );
      expect(screen.getByText(PanelBodyContent)).toHaveClass('panel-body');
      expect(screen.getByText(PanelHeaderContent)).toHaveClass('panel-title');
    });

    test('Panel Footer', () => {
      render(
        <Panel footerContent={PanelFooterContent}>{PanelBodyContent}</Panel>
      );
      expect(screen.getByText(PanelBodyContent)).toHaveClass('panel-body');
      expect(screen.getByText(PanelFooterContent)).toHaveClass('panel-footer');
    });

    test('Panel Footer & Header', () => {
      render(
        <Panel
          headerContent={PanelHeaderContent}
          footerContent={PanelFooterContent}
        >
          {PanelBodyContent}
        </Panel>
      );
      expect(screen.getByText(PanelBodyContent)).toHaveClass('panel-body');
      expect(screen.getByText(PanelHeaderContent)).toHaveClass('panel-title');
      expect(screen.getByText(PanelFooterContent)).toHaveClass('panel-footer');
    });
  });

  describe('Test custom heading level', () => {
    const PanelBodyContent = 'Body: Hello world!';
    const PanelHeaderContent = 'Header: Hello world!';

    test('Panel default heading level', () => {
      render(
        <Panel headerContent={PanelHeaderContent}>{PanelBodyContent}</Panel>
      );

      expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
        PanelHeaderContent
      );
    });

    test('Panel invalid heading level', () => {
      render(
        <Panel headerContent={PanelHeaderContent} headerLevel="zzz">
          {PanelBodyContent}
        </Panel>
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        PanelHeaderContent
      );
    });

    test('Panel custom heading level 1', () => {
      render(
        <Panel headerContent={PanelHeaderContent} headerLevel="h1">
          {PanelBodyContent}
        </Panel>
      );

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        PanelHeaderContent
      );
    });

    test('Panel custom heading level 4', () => {
      render(
        <Panel headerContent={PanelHeaderContent} headerLevel="h4">
          {PanelBodyContent}
        </Panel>
      );

      expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
        PanelHeaderContent
      );
    });
  });

  describe('Panel visibility', () => {
    test('Hidden Panel', () => {
      const PanelBodyContent = 'Body: Hello world!';
      const result = render(<Panel visible={false}>{PanelBodyContent}</Panel>);

      expect(result.container.querySelector('.panel')).not.toBeInTheDocument();
    });
  });
});
