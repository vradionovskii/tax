export default function CloseButton({ onClick }) {
  return (
    <button
      className="absolute top-0 right-0 w-6 h-6 mt-4 mr-4 md:h-10 md:w-10"
      onClick={onClick}
    >
      <svg
        className="fill-current text-theme-red"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.615 12l4.036-4.037a1.14 1.14 0 00-1.244-1.87c-.139.06-.265.147-.37.256l-4.038 4.036-4.036-4.036A1.142 1.142 0 106.35 7.963L10.385 12l-4.036 4.038a1.142 1.142 0 101.614 1.614L12 13.615l4.038 4.036a1.14 1.14 0 001.878-.36 1.142 1.142 0 00-.264-1.254l-4.036-4.038v.002z" />
      </svg>
    </button>
  );
}
