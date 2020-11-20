import { useState } from "react";

export default function SingleInputForm({ label, inputType, inputPlaceholder, onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let temp = value;
    setValue("");
    onSubmit(temp);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {label}
          <input
            type={inputType}
            value={value}
            placeholder={inputPlaceholder}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
