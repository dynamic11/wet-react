import OriginModal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalDialog from './ModalDialog';

export type ModalProps = typeof OriginModal & {
  Title: typeof ModalTitle;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Static: typeof ModalDialog;
};

const Modal = OriginModal as ModalProps;

Modal.Body = ModalBody;
Modal.Title = ModalTitle;
Modal.Header = ModalHeader;
Modal.Static = ModalDialog;

export default Modal;
