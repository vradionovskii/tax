export default function ModalBackground({ onClose }) {
  return (
    <button
      onClick={onClose}
      aria-label="закрыть окно"
      className="fixed inset-0 bg-[#b3b3b3] w-full h-full"
    />
  );
}
