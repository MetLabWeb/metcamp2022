import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import QuestionCard from "../../components/QuestionCard";

const props = {
    preguntaActual: {
        id: 8,
        question: "¿Quién mató a Dobby?",
        answers: [
            {
                id: 1,
                answer: "Lucius Malfoy",
                is_correct: false
            },
            {
                id: 2,
                answer: "Bellatrix Lestrange",
                is_correct: true
            },
            {
                id: 3,
                answer: "Fenrir Greyback",
                is_correct: false
            },
            {
                id: 4,
                answer: "Alecto Carrow",
                is_correct: false
            }
        ]
    },
    selectedAnswers: [],
    setSelectedAnswers: jest.fn(),
    mostrarResultado: true,
}

describe('Tests en el componente QuestionCard', () => {
    test('Debe de renderizar el componente', () => {
        render(<QuestionCard {...props} />);
        const question = screen.getByText('¿Quién mató a Dobby?');

        expect(question).toBeInTheDocument();
    })

    test('Debe de ejecutar la funcion setSelectedAnswer', () => {
        render(<QuestionCard {...props} />);
        const answer = screen.getByRole('radio', { name: 'Bellatrix Lestrange' });

        userEvent.click(answer);

        expect(props.setSelectedAnswers).toHaveBeenCalledTimes(1);
    })
})