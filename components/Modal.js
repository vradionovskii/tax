import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import CheckBoxes from "./CheckBoxes";
import CloseButton from "./CloseButton";
import Input from "./Input";
import Tag from "./Tag";

const Modal = ({ onClose, show }) => {
  const [salary, setSalary] = useState("");
  const [number, setNumber] = useState("");
  const [errorState, setErrorState] = useState(false);
  const [isPayment, setIsPayment] = useState(true);

  const salaryOnlyNumbers = () => salary.replace(/\s|₽/g, "");

  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "decimal",
    currency: "RUB",
  });

  function validate() {
    if (salary) {
      setErrorState(false);
      setSalary(formatter.format(salaryOnlyNumbers()) + " ₽");
    } else {
      setErrorState(true);
    }
  }

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return show
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center overflow-y-scroll">
          <button
            onClick={onClose}
            aria-label="закрыть окно"
            className="fixed inset-0 bg-[#b3b3b3] w-full h-full"
          />
          <div className=" absolute top-0 md:py-[7.5rem] pointer-events-none">
            <div className="pointer-events-auto relative flex flex-col  w-full min-h-screen px-4 pt-8 pb-4 md:py-8 bg-white md:max-w-[28.125rem] lg:max-w-[34.5rem] md:min-h-0 md:px-8 md:rounded-[1.875rem]">
              <CloseButton onClick={onClose} />
              <p className="text-lg font-medium md:text-[1.75rem] pb-4">
                Налоговый вычет
              </p>
              <p className="pb-6 text-text-gray">
                Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                Размер налогового вычета составляет не более 13% от своего
                официального годового дохода.
              </p>
              <Input
                errorState={errorState}
                value={salary}
                onChange={(e) => setSalary(e.target.value.replace(/\D/g, ""))}
                onBlur={() => validate()}
              />
              <button
                onClick={() => setNumber(salaryOnlyNumbers())}
                className="py-4 mr-auto text-sm font-medium transition-colors duration-200 text-theme-red active:text-theme-red hover:text-theme-red-hover"
              >
                Рассчитать
              </button>
              {number && <CheckBoxes salary={number} />}
              <div className="items-center md:flex md:pt-6">
                <p className="pb-6 pt-2 md:py-0 text-sm font-medium pr-[4.75rem]">
                  Что уменьшаем?
                </p>
                <div className="space-x-[0.75rem]">
                  <Tag
                    label="Платёж"
                    isActive={isPayment}
                    onClick={() => setIsPayment(true)}
                  />
                  <Tag
                    isPayment
                    label="Срок"
                    isActive={!isPayment}
                    onClick={() => setIsPayment(false)}
                  />
                </div>
              </div>
              <div className="mt-auto md:mt-0">
                <Button className="w-full mt-10">Добавить</Button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default Modal;
