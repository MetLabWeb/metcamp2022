import Button from "../../components/Button";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const onClickButton = (url) => {
        navigate(url);
    }

 return(
    <Button onClick={() => onClickButton('/game')} text='MetCamp Quiz' />
 )
}

export default Home;