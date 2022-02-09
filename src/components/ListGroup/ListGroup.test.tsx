import React from 'react';
import { render, screen } from '@testing-library/react';

import ListGroup from '@components/ListGroup';
import ListGroupItem from './ListGroupItem';

describe('ListGroup tests', () => {
  describe('Test ListGroup Item Style variants', () => {
    const placeholder = 'PlaceHolder Text';
    test('Renders default style', () => {
      render(
        <ListGroup>
          <ListGroup.Item>{placeholder}</ListGroup.Item>
        </ListGroup>
      );
      expect(screen.getByText(placeholder)).toHaveClass('list-group-item');
    });
    test('Renders info style', () => {
      render(
        <ListGroup>
          <ListGroup.Item variant="info">{placeholder}</ListGroup.Item>
        </ListGroup>
      );
      expect(screen.getByText(placeholder)).toHaveClass('list-group-item-info');
    });
  });
});
