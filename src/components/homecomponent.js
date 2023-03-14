import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import dice from '../assets/images/icon-dice.svg';
import patternDesk from '../assets/images/pattern-divider-desktop.svg';
import patternMobile from '../assets/images/pattern-divider-mobile.svg';

export default function HomeComponent(){

    const [adviceNumber, setAdviceNumber] = useState("Advice");
    const [adviceText, setAdviceText] = useState("");

    async function ApiAdvice(){
        await fetch("https://api.adviceslip.com/advice")
        .then(data => data.json())
        .then(data => {
            console.log(data.slip);
            setAdviceNumber("Advice #" + data.slip.id);
            setAdviceText("\"" + data.slip.advice + "\"");
        });
    }

    function handleButtonClick() {
        ApiAdvice();
    }

    useEffect(() => {
        ApiAdvice();
    }, []);

    return(
        <Container className='homeContainer'>
            <Row className='homeRow'>
                <Col className='homeCol'>
                    <div className='homeDiv'>
                        <p className='greenText' id='adviceNumber'>{adviceNumber}</p>
                        <div className='adviceTextBox'>
                            <h1 className='adviceText' id='adviceText'>{adviceText}</h1>
                        </div>
                        <img className='deskPic' src={patternDesk} alt='pic one' />
                        <img className='mobilePic' src={patternMobile} alt='pic two' />
                    </div>
                    <Row className='diceRow'>
                            <button className='diceDiv' onClick={handleButtonClick}>
                                <img className='dicePic' src={dice} alt='pic three' />
                            </button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}