import React from 'react';
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

export interface ModalDialogProps extends React.HTMLAttributes<HTMLDivElement> {
  /** vertically center the Dialog in the window */
  centered?: boolean;
  /** When true The modal will show itself. */
  show?: boolean;
  /** Render a large, extra large or small modal. When not provided, the modal is rendered with medium (default) size. */
  size?: sizeType;
  /**  */
  fullScreen?: fullScreenType;
  /** Allows scrolling the body instead of the entire Modal when overflowing. */
  scrollable?: boolean;
  /** The content of the modal */
  children?: React.ReactNode;
}

const ModalDialog = ({
  children,
  size = 'lg',
  fullScreen = 'lg-down',
  scrollable,
  centered,
  ...rest
}: ModalDialogProps) => (
  <ModalRB
    size={size}
    fullscreen={fullScreen}
    scrollable={scrollable}
    centered={centered}
    {...rest}
  >
    {React.Children.toArray(children)}
  </ModalRB>
);
ModalDialog.displayName = 'ModalDialog';
export default ModalDialog;
