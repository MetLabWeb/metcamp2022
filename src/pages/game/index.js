import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import QuestionCard from "../../components/QuestionCard"
import Result from "../../components/Result";
import useFetch from "../../hooks/useFetch";

const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {
    const { loading, data: questions } = useFetch(API_URL);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    function calcularResultado() {
        const respuestasCorrectas = selectedAnswers.filter((respuesta) => respuesta.valorOpcion === true)
        setResult(respuestasCorrectas.length)
        setMostrarResultado(true)
    }

    return (
        <div className="container">
            <section className="section">
                <nav className="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="is-active">
                            <Link to="/game">Juego</Link>
                        </li>
                    </ul>
                </nav>
                {
                    loading &&
                    <div>Cargando...</div>
                }
                {
                    !loading && (
                        <form>
                            {
                                questions.map((pregunta) => {
                                    return <QuestionCard
                                        key={pregunta.id}
                                        preguntaActual={pregunta}
                                        selectedAnswers={selectedAnswers}
                                        setSelectedAnswers={setSelectedAnswers}
                                        mostrarResultado={mostrarResultado}
                                    />
                                })
                            }
                        </form>
                    )
                }
                <div className="level">
                    <div className="level-left">
                        {
                            mostrarResultado &&
                            <Result valorResultado={result} />
                        }
                    </div>
                    <div className="level-right">
                        <Button
                            disabled={selectedAnswers.length !== questions.length || mostrarResultado}
                            onClick={() => calcularResultado()}
                            text="Validar" />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Game;