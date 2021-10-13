export default function Input({ errorState, ...props }) {
  return (
    <label className="block text-sm">
      <span className="block pb-4 font-medium">Ваша зарплата в месяц</span>
      <input
        type="text"
        pattern="[0-9]{12}"
        {...props}
        className={`block w-full rounded-[0.1875rem] h-10 border-[#DFE3E6] border-2 placeholder-text-gray focus:border-[#000] p-[0.625rem] text:border-text-gray disabled:border-text-gray disabled:placeholder-text-gray disabled:bg-white ${
          errorState && !props.disabled ? "!border-theme-red" : ""
        }`}
        placeholder="Введите данные"
      />
      {errorState && !props.disabled && (
        <span className="text-[0.625rem] text-theme-red pt-1">
          Поле обязательно для заполнения
        </span>
      )}
    </label>
  );
}
