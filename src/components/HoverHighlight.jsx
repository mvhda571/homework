import { useState } from "react";

function HoverHighlight() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <h2>Hover Highlight</h2>

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: hover ? "yellow" : "lightgray",
        }}
      >
        Hover me
      </div>
    </div>
  );
}

export default HoverHighlight;