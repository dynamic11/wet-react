import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Table from '@components/Table';

describe('Table tests', () => {
  describe('Test Table styling', () => {
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
});
