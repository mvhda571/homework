import { useState } from "react";

function FormLogger() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
    });
  };

  return (
    <div>
      <h2>Form Logger</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Yuborish</button>
      </form>
    </div>
  );
}

export default FormLogger;