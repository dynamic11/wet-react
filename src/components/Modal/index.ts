import OriginModal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalDialog from './ModalDialog';
import ModalFooter from './ModalFooter';

export type ModalProps = typeof OriginModal & {
  Title: typeof ModalTitle;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Dialog: typeof ModalDialog;
};

const Modal = OriginModal as ModalProps;

Modal.Body = ModalBody;
Modal.Title = ModalTitle;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Dialog = ModalDialog;

export default Modal;
