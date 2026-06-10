import { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(`Button ${count + 1} marta bosildi`);
  };

  return (
    <div>
      <h2>Click Counter</h2>
      <button onClick={handleClick}>
        Bosishlar soni: {count}
      </button>
    </div>
  );
}

export default ClickCounter;