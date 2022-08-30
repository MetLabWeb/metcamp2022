import "./index.css";

function QuestionCard({ preguntaActual }) {
    return (
        <div className="box">
            <div className="mi-clase">
            <span className="tag is-rounded is-primary is-light">{preguntaActual.id}</span>
            <span><strong> {preguntaActual.question}</strong></span>
            </div>
            {
                preguntaActual.answers.map((opcion) => (
                    <div key={opcion.id}>
                        <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer} ></input>
                        <label htmlFor={`${opcion.id}`}> {opcion.answer}</label>
                    </div>
                ))
            }
        </div>
    )
}

export default QuestionCard;