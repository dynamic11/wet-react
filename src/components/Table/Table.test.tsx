import React from 'react';
import { render, screen } from '@testing-library/react';

import Table from '@components/Table';

describe('Table tests', () => {
  describe('Variant styling', () => {
    test('Default Style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell>Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff')).toHaveClass('default');
    });
    test('Active Style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="active">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff')).toHaveClass('active');
    });
    test('Danger Style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="danger">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff')).toHaveClass('danger');
    });
    test('Warning Style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="warning">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff')).toHaveClass('warning');
    });
    test('Success Style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="success">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff')).toHaveClass('success');
    });
  });
  describe('Test Table styling', () => {
    test('Striped Style', () => {
      render(
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="active">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(
        screen.getByText('Stuff').parentElement?.parentElement?.parentElement
      ).toHaveClass('table-striped');
    });
    test('Bordered Style', () => {
      render(
        <Table bordered>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="active">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(
        screen.getByText('Stuff').parentElement?.parentElement?.parentElement
      ).toHaveClass('table-bordered');
    });
    test('Responsive Style', () => {
      render(
        <Table responsive>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="active">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(
        screen.getByText('Stuff').parentElement?.parentElement?.parentElement
          ?.parentElement
      ).toHaveClass('table-responsive');
    });
    test('Condensed Style', () => {
      render(
        <Table condensed>
          <Table.Header>
            <Table.Row>
              <Table.Cell>Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(
        screen.getByText('Stuff').parentElement?.parentElement?.parentElement
      ).toHaveClass('table-condensed');
    });
    test('Hover Style', () => {
      render(
        <Table hover>
          <Table.Header>
            <Table.Row>
              <Table.Cell variant="active">Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(
        screen.getByText('Stuff').parentElement?.parentElement?.parentElement
      ).toHaveClass('table-hover');
    });
  });
  describe('Row variants', () => {
    test('Active row style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row variant="active">
              <Table.Cell>Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff').parentElement).toHaveClass('active');
    });
    test('Success row style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row variant="success">
              <Table.Cell>Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff').parentElement).toHaveClass('success');
    });
    test('Warning row style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row variant="warning">
              <Table.Cell>Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff').parentElement).toHaveClass('warning');
    });
    test('Danger row style', () => {
      render(
        <Table>
          <Table.Header>
            <Table.Row variant="danger">
              <Table.Cell>Stuff</Table.Cell>
            </Table.Row>
          </Table.Header>
        </Table>
      );
      expect(screen.getByText('Stuff').parentElement).toHaveClass('danger');
    });
  });
});
