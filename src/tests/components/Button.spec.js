import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "../../components/Button"

const props = {
    text: 'metcamp test',
    disabled: false,
    onClick: jest.fn()
}

describe('Tests en el componente Button', () => {
    test('Debe de renderiza mi componente Button', () => {
        
        render(<Button {...props} />);
        const button = screen.getByText('metcamp test');

        expect(button).toBeDefined();
    })

    test('Debe de ejecutar la funcion onClick', () => {
        // I. Inicialización. (importamos el componente y lo renderizamos)
        render(<Button {...props} />);

        // Puedo usar este comando para seleccionar la mejor querie para traer nuestro elemento
        // screen.logTestingPlaygroundURL()

        const button = screen.getByRole('button', {
            name: /metcamp test/i
          });

        // II. Estímulo (simulo alguna acción / interacción).
        userEvent.click(button);

        // III. Hago afirmaciones sobre el resultado obtenido y el esperado.
        expect(props.onClick).toHaveBeenCalledTimes(1);
    })

    test('No debe de ejecutar la funcion onClick cuando el botton esta deshabilitado', () => {

        // Renderizo mi botton pero le paso la propiedad disabled en true
        render(<Button {...props} disabled={true} />);

        const button = screen.getByRole('button', {
            name: /metcamp test/i
          });

        userEvent.click(button);

        expect(props.onClick).not.toHaveBeenCalledTimes(1);
    })
})