import ModalButton from "./ModalButton";

const Modal = ({ children }) => {
  return (
    <aside className="modal-container" onClick={(e) => {}}>
      <div className="modal">
        {children} <ModalButton />
      </div>
      <ModalButton />
    </aside>
  );
};

export default Modal;
