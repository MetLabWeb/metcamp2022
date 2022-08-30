import './styles.css';

function Button({ text, onClick }) {
    return (
        <button onClick={onClick} className="button is-primary">
            { text }
        </button>
    )
}

export default Button;
