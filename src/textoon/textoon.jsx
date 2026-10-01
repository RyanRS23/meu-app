import { useState } from "react";
import "./textoon.scss";

function App() {
  const [texto, setTexto] = useState("");
  const [cor, setCor] = useState("#ff0000");
  const [cortexto, setCorTexto] = useState("#000000");

  return (
    <div
      className="app"
      style={{
        backgroundColor: cor,
        color: cortexto
      }}
    >
      <input
        type="text"
        placeholder="Digite alguma coisa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <input
        type="color"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
      />

      <input
        type="color"
        value={cortexto}
        onChange={(e) => setCorTexto(e.target.value)}
      />

      <h1>{texto}</h1>
    </div>
  );
}

export default App;