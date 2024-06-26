import Card from "../card/Card";
import glosario from '../../mock/glosario.json';
import "./Body.css";
import Footer from "../footer/Footer";
import {useState} from "react";

function Body() {
    const [filter, setFilter] = useState("all");
    const { palabras } = glosario;
    const getPalabras = () => {
        let filtered = palabras.filter((word) => {
            return (filter === "all" || word.ingles.toString().charAt(0).toLocaleLowerCase() === filter.toLocaleLowerCase() || word.espaniol.toString().charAt(0).toLocaleLowerCase() === filter.toLocaleLowerCase())
        })
        return filtered.map((palabra) => {
            return <Card palabra={palabra} />;
        })
    }
    
    return (
        <div className="contenedor">
            <div>
                {getPalabras()}
            </div>
            <Footer applyFilter={(letter) => {setFilter(letter)}} />
        </div>
    )
}

export default Body;