import "./index.css";

function QuestionCard({ preguntaActual, selectedAnswers, setSelectedAnswers, mostrarResultado }) {

    function seleccionarRespuesta(identificador, valorOpcion) {
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== identificador)
        setSelectedAnswers([...otrasRespuestas,
        {
            id: identificador,
            valorOpcion
        }
        ])
    }

    function mostrarColores(valor) {
        let valorClase = "";
        if (mostrarResultado) {
            if (valor === true) {
                valorClase = "has-text-primary";
            } else {
                valorClase = "has-text-danger"
            }
        }
        return valorClase;
    }

    return (
        <div className="box">
            <div className="mi-clase">
                <span className="tag is-rounded is-primary is-light">{preguntaActual.id}</span>
                <span><strong> {preguntaActual.question}</strong></span>
            </div>
            {
                preguntaActual.answers.map((opcion) => (
                    <div
                        key={opcion.id}
                        onChange={() => seleccionarRespuesta(preguntaActual.id, opcion.is_correct)}
                    >
                        <input type="radio"
                            id={`${preguntaActual.id}`}
                            name={preguntaActual.id}
                            value={opcion.answer} ></input>
                        <label htmlFor={`${preguntaActual.id}`}
                            className={mostrarColores(opcion.is_correct)}
                        >&nbsp;{opcion.answer}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionCard;