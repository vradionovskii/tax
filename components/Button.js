export default function Button({
  children,
  className,
  disabled,
  onClick,
  stroke,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`duration-200 transition-colors md:px-8 md:py-4 text-xs md:text-base rounded-[0.375rem] font-medium px-6 py-3 text-white active:bg-theme-red hover:bg-theme-red disabled:bg-theme-gray disabled:border-[0.0625rem] disabled:border-theme-gray ${className} ${
        stroke
          ? "!border-[0.0625rem] !bg-transparent hover:!bg-white hover:!text-black active:!bg-white active:!text-black"
          : "shadow-[0px 0px 24px rgba(234, 0, 41, 0.33)] main-background-gradient"
      }`}
    >
      {children}
    </button>
  );
}
1;
