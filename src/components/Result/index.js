import { useEffect, useState } from "react";
import bien from "../../assets/bien.png";
import mal from "../../assets/mal.png";
import maso from "../../assets/medio.png";

function Result({ valorResultado }) {
    const [imagen, setImagen] = useState(["hola"]);

    function getImageSource(valorResultado) {
        if (valorResultado <= 4) setImagen(mal)
        else if (valorResultado > 4 && valorResultado <= 7) setImagen(maso)
        else setImagen(bien)
    }

    useEffect(() => {
        getImageSource(valorResultado)
    }, [valorResultado])

    return (
        <>
            <h1>{valorResultado} respuestas correctas</h1>
            <img src={imagen}></img>
        </>
    )
}

export default Result;