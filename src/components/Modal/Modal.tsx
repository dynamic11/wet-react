import React, { Children } from 'react';
import ModalRB from 'react-bootstrap/ModalDialog';

import '../../style.css';

type sizeType = 'sm' | 'lg' | 'xl';

type fullScreenType =
  | true
  | 'sm-down'
  | 'md-down'
  | 'lg-down'
  | 'xl-down'
  | 'xxl-down';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
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
  restoreFocus?: boolean;
  /** Allows scrolling the body instead of the entire Modal when overflowing. */
  scrollable?: boolean;
  /** Close the modal when escape key is pressed */
  keyboard?: boolean;
  /** The content of the modal */
  children?: React.ReactNode;
}

const Modal = ({
  children,
  show,
  animation = true,
  autoFocus,
  size = 'lg',
  fullScreen = 'lg-down',
  restoreFocus = true,
  keyboard = true,
  scrollable,
  centered,
  ...rest
}: ModalProps) => (
  <ModalRB
    size={size}
    fullscreen={fullScreen}
    scrollable={scrollable}
    centered={centered}
    keyboard={keyboard}
    autoFocus={autoFocus}
    restoreFocus={restoreFocus}
    animation={animation}
    show={show}
    {...rest}
  >
    {React.Children.toArray(children)}
  </ModalRB>
);
Modal.displayName = 'Modal';
export default Modal;
