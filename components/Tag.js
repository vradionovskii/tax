export default function Tag({ label, isActive, onClick }) {
  function shouldUpdate() {
    if (!isActive) {
      onClick();
    }
  }
  return (
    <button
      onClick={shouldUpdate}
      className={`tag py-[0.375rem] text-sm leading-6 px-[0.75rem] rounded-[3.125rem] transition-colors duration-200 ${
        isActive ? "main-background-gradient text-white" : "bg-[#EEF0F2]"
      }`}
    >
      {label}
    </button>
  );
}
