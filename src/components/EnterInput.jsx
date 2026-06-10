import { useState } from "react";

function EnterInput() {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(text);
    }
  };

  return (
    <div>
      <h2>Enter Key Logger</h2>

      <input
        type="text"
        placeholder="Biror narsa yozing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default EnterInput;