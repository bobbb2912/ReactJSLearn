import React, {useState, useEffect} from 'react';
import {Container, Row, Button, Form, InputGroup} from 'react-bootstrap';

const RESULT = {
    thang: 'thang',
    thua: 'thua',
    doing: 'doing',
}
const Main = () => {
  const [countGuess, setCountGuess] = useState(0);
  const [randomNumber, setrandomNumber] = useState(null);
  const [inputValue, setinputValue] = useState('');
  const [result, setresult] = useState('');
  const [checkResult, setCheckResult] = useState(RESULT.doing);

  const newGame = () => {
    setCountGuess(0);
    createRandom();
    setCheckResult(RESULT.doing);
  };
  const guess = () => {
    setCountGuess(countGuess + 1);
    if (inputValue>randomNumber) {
        setresult('so lon qua roi')
    } else if (inputValue<randomNumber) {
        setresult('so nho qua roi');
    } else {
        setresult(`ban doan dung roi! so ngau nhien la ${randomNumber}`);
        setCheckResult(RESULT.thang)
    }
    setinputValue('')
  };

  const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1))+min;
  }


  
    const createRandom = () => {
        const random = getRandom(1, 100);
        setrandomNumber(random);
    };

    const handleKeyDown = (event) => {
        if(event.keyCode===13) {
            guess();
        }
    }


    //   ueh
    useEffect(() => {
        createRandom();
    }, []);

    useEffect(() => {
    if(countGuess>7) {
    setresult('ban da thua roi');
    setCheckResult(RESULT.thua);
    }
    }, [countGuess]);

    useEffect(() => {
       if (checkResult===RESULT.thang) {
        setresult('game se reset trong 5s...');
        setTimeout(() => {
            newGame();
            setresult('');
        }, 5000);
       } 
    
       
    }, [checkResult]);
  return (
    <Container>
      <Row>
        <div className={`fs-1 text-center m-5 fw-bold font-monospace ${checkResult===RESULT.thang? 'text-success':checkResult===RESULT.thua? 'text-danger' :'text-black'} `}>
          Random Number (1-100)
        </div>
      </Row>
      <Row>
        <Button onClick={newGame} variant='primary'>
          New game
        </Button>
      </Row>
      <p className='my-2 font-monospace'>Số lần đoán của bạn là: {countGuess}</p>
      <p>{randomNumber}</p>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='Input number'
          aria-label='Input number'
          aria-describedby='basic-addon2'
          type='number'
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={(text) => {
            setinputValue(text.target.value);
            console.log('====================================');
            console.log({inputValue});
            console.log('====================================');
          }}
        />
        <Button onClick={guess} variant='success' id='button-addon2'>
          Guess
        </Button>
      </InputGroup>
      <p>{result}</p>
    </Container>
  );
};

export default Main;
