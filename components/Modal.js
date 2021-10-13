import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, show, children, title }) => {
  const closeOnEscapeKeyDown = (e) => {
    e.preventDefault();
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);
  return show
    ? ReactDOM.createPortal(
        <div
          onKeyDown={onClose}
          role="button"
          className="fixed inset-0 bg-[#b3b3b3] flex items-center justify-center"
          tabIndex={0}
          onClick={onClose}
        >
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.stopPropagation()}
            className="w-32 bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button onClick={onClose} className="button">
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
