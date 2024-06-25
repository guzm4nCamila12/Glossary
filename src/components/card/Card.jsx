import { useState } from "react";
import "./Card.css";

function Card({palabra}) {
    const [show, setShow] = useState('ingles');

    const cambiarIdioma = () => {
        if(show === 'ingles')
            setShow('espaniol');
        else
            setShow('ingles');
    }

    return (
        <div className="card">
            <button onClick={() => {cambiarIdioma()}}>
                <strong>{palabra[show]}</strong>
                <p>{palabra["des_" + show]}</p>
            </button>
        </div>
    )
}

export default Card;