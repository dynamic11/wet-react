import React from 'react';
import { render, screen } from '@testing-library/react';

import Modal from '@components/Modal';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

describe('Modal Tests', () => {
  const placeholder = 'PlaceHolder Text';
  describe('Testing Modal exists', () => {
    const result = render(
      <Modal show>
        <div>test</div>
      </Modal>
    );
    expect(result).toBeTruthy();
  });
  describe('Testing Header', () => {
    test('Header class', () => {
      render(
        <Modal.Dialog centered>
          <Modal.Header>{placeholder}</Modal.Header>
        </Modal.Dialog>
      );
      expect(screen.getByText(placeholder)).toHaveClass('modal-header');
    });
  });
  describe('Testing dialog', () => {
    test('Dialog Class', () => {
      render(<Modal.Dialog centered>{placeholder}</Modal.Dialog>);
      expect(screen.getByText(placeholder)).toHaveClass('modal-content');
    });
  });
  describe('Testing Body', () => {
    test('Body Class', () => {
      render(
        <Modal.Dialog>
          <Modal.Body>{placeholder}</Modal.Body>
        </Modal.Dialog>
      );
      expect(screen.getByText(placeholder)).toHaveClass('modal-body');
    });
  });
  describe('Testing Footer', () => {
    test('Footer Class', () => {
      render(
        <Modal.Dialog>
          <Modal.Footer>{placeholder}</Modal.Footer>
        </Modal.Dialog>
      );
      expect(screen.getByText(placeholder)).toHaveClass('modal-footer');
    });
  });
  describe('Testing Title', () => {
    test('Title Class', () => {
      render(<Modal.Title>{placeholder}</Modal.Title>);
      expect(screen.getByText(placeholder)).toHaveClass('modal-title');
    });
  });
});
