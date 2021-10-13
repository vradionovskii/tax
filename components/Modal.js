import { useEffect } from "react";
import ReactDOM from "react-dom";
import CloseButton from "./CloseButton";

const Modal = ({ onClose, show }) => {
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
          className="fixed inset-0 bg-[#b3b3b3] flex items-center justify-center overflow-y-scroll"
          tabIndex={0}
          onClick={onClose}
        >
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.stopPropagation()}
            className="relative w-full min-h-screen px-4 pt-8 pb-4 md:py-8 bg-white md:max-w-[28.125rem] lg:max-w-[34.5rem] md:min-h-0 md:px-8 md:rounded-[1.875rem]"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} />
            <p className="text-lg font-medium md:text-[1.75rem] pb-4">
              Налоговый вычет
            </p>
            <p className="text-text-gray">
              Используйте налоговый вычет чтобы погасить ипотеку досрочно.
              Размер налогового вычета составляет не более 13% от своего
              официального годового дохода.
            </p>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
