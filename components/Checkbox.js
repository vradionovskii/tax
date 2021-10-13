import { useState } from "react";

export default function Checkbox({ id }) {
  const [checked, setChecked] = useState(false);

  return (
    <input
      className="w-5 h-5 mr-3"
      type="checkbox"
      id={id}
      value={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}
