import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ListGroup from '@components/ListGroup';

describe('ListGroup tests', () => {
  const placeholder = 'PlaceHolder Text';
  describe('Test ListGroup Item Style variants', () => {
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
    test('Renders danger style', () => {
      render(
        <ListGroup>
          <ListGroup.Item variant="danger">{placeholder}</ListGroup.Item>
        </ListGroup>
      );
      expect(screen.getByText(placeholder)).toHaveClass(
        'list-group-item-danger'
      );
    });
    test('Renders warning style', () => {
      render(
        <ListGroup>
          <ListGroup.Item variant="warning">{placeholder}</ListGroup.Item>
        </ListGroup>
      );
      expect(screen.getByText(placeholder)).toHaveClass(
        'list-group-item-warning'
      );
    });
    test('Renders success style', () => {
      render(
        <ListGroup>
          <ListGroup.Item variant="success">{placeholder}</ListGroup.Item>
        </ListGroup>
      );
      expect(screen.getByText(placeholder)).toHaveClass(
        'list-group-item-success'
      );
    });
  });
  describe('Testing ListGroupItem Links ', () => {
    test('Test if link is there', () => {
      render(
        <ListGroup>
          <ListGroup.Item href="https://www.youtube.com/" variant="success">
            {placeholder}
          </ListGroup.Item>
        </ListGroup>
      );
      expect(screen.getByText(placeholder)).toHaveAttribute(
        'href',
        'https://www.youtube.com/'
      );
    });
    test('Test if List items respond to being clicked on', () => {
      const followLink = jest.fn();
      render(
        <ListGroup>
          <ListGroup.Item
            href="https://www.youtube.com/"
            variant="success"
            onClick={followLink}
          >
            {placeholder}
          </ListGroup.Item>
        </ListGroup>
      );
      const item = screen.getByText(placeholder);
      fireEvent.click(item);
      expect(followLink).toHaveBeenCalledTimes(1);
    });
  });
});
