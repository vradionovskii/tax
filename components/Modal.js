import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import CheckBoxes from "./CheckBoxes";
import CloseButton from "./CloseButton";
import Input from "./Input";
import IntroText from "./IntroText";
import ModalBackground from "./ModalBackground";
import Tag from "./Tag";

const Modal = ({ onClose, show }) => {
  const [salary, setSalary] = useState("");
  const [finalNumber, setFinalNumber] = useState("");
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
          <ModalBackground onClose={onClose} />
          <div className=" absolute top-0 md:py-[7.5rem] pointer-events-none min-h-screen md:min-h-0">
            <div className="pointer-events-auto relative flex flex-col  w-full md:min-h-0 min-h-screen px-4 pt-8 pb-4 md:py-8 bg-white md:max-w-[28.125rem] lg:max-w-[34.5rem]  md:px-8 md:rounded-[1.875rem]">
              <CloseButton onClick={onClose} />
              <IntroText />
              <Input
                errorState={errorState}
                value={salary}
                onChange={(e) => setSalary(e.target.value.replace(/\D/g, ""))}
                onBlur={() => validate()}
              />
              <button
                onClick={() => setFinalNumber(salaryOnlyNumbers())}
                className="py-4 mr-auto text-sm font-medium transition-colors duration-200 text-theme-red active:text-theme-red hover:text-theme-red-hover"
              >
                Рассчитать
              </button>
              {finalNumber && <CheckBoxes salary={finalNumber} />}
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
