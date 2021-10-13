export default function Button({ children, className, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`big-button ${className}`}
    >
      {children}
    </button>
  );
}
