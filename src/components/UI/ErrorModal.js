import Wrapper from "../Helpers/Wrapper"
import Button from "./Button"
import Card from "./Card"
import './ErrorModal.css'

const ErrorModal = (props) => {

    return <Wrapper>
        <div className="backdrop" onClick={props.onConfirm} />
    <Card className='modal'>
        <header className='header'>
            <h2>{props.title}</h2>
        </header>
        <div className='content'>
            <p>{props.message}</p>
        </div>
        <footer className='actions'>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
        
    </Card>
    </Wrapper>

}

export default ErrorModal