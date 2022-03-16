import React from 'react';
import ModalRB from 'react-bootstrap/Modal';
import '../../style.css';

type sizeType = 'sm' | 'lg' | 'xl';

type fullScreenType =
  | true
  | 'sm-down'
  | 'md-down'
  | 'lg-down'
  | 'xl-down'
  | 'xxl-down';

export interface ModalProps {
  /** Open and close the modal with a slide and fade animation */
  animation?: boolean;
  /** When true The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers. */
  autoFocus?: boolean;
  /** vertically center the Dialog in the window */
  centered?: boolean;
  /** When true The modal will show itself. */
  show?: boolean;
  /** Render a large, extra large or small modal. When not provided, the modal is rendered with medium (default) size. */
  size?: sizeType;
  /**  */
  fullScreen?: fullScreenType;
  /** When true The modal will restore focus to previously focused element once modal is hidden */
  restorefocus?: boolean;
  /** Allows scrolling the body instead of the entire Modal when overflowing. */
  scrollable?: boolean;
  /** Close the modal when escape key is pressed */
  keyboard?: boolean;
  /** The content of the modal */
  children?: React.ReactNode;
}

const Modal = ({
  children,
  show = false,
  animation = true,
  autoFocus,
  size = 'lg',
  fullScreen = 'lg-down',
  restorefocus = true,
  keyboard = true,
  scrollable,
  centered,
  ...rest
}: ModalProps) => (
  <ModalRB
    size={size}
    fullScreen={fullScreen}
    scrollable={scrollable}
    centered={centered}
    keyboard={keyboard}
    autoFocus={autoFocus}
    restorefocus={restorefocus}
    animation={animation}
    show={show}
    {...rest}
  >
    {React.Children.toArray(children)}
  </ModalRB>
);
Modal.displayName = 'Modal';
export default Modal;
