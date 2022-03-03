import OriginModal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';

export type ModalProps = typeof OriginModal & {
  Title: typeof ModalTitle;
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
};

const Modal = OriginModal as ModalProps;

Modal.Body = ModalBody;
Modal.Title = ModalTitle;
Modal.Header = ModalHeader;

export default Modal;
