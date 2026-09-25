import { useState } from "react";
import "./index.scss";

export default function App() {

    const [contador, setContador] = useState(0);

    function aumentar() {
        if (contador < 20) {
            setContador(contador + 1);
        }
    }

    function diminuir() {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>

            <button onClick={aumentar}>
                Aumentar
            </button>

            <button onClick={diminuir}>
                Diminuir
            </button>
        </div>
    );
}