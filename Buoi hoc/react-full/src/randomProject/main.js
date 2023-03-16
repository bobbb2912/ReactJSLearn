import React, {useState, useEffect, useRef} from 'react';
import {Container, Row, Button, Form, InputGroup} from 'react-bootstrap';
import Body from './components/Body';
import Header from './components/Header';

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
  const [disableInput, setDisableInput] = useState(false);
  const inputReference = useRef(null);

   
  const newGame = () => {
    setCountGuess(0);
    createRandom();
    setCheckResult(RESULT.doing);
    setDisableInput(false);
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
  const onChangeData=(text) => {
    setinputValue(text.target.value);
    console.log('====================================');
    console.log({inputValue});
    console.log('====================================');
  }

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

    function resetGame() {
      setDisableInput(true);

      setTimeout(() => {
        setresult('game se reset trong 5s...');
      }, 2000);
      setTimeout(() => {
        newGame();
        setresult('');
        // inputReference.current.focus();
      }, 5000);
    }

    //   ueh
    useEffect(() => {
        createRandom();
        // if(disableInput===false) {
        //   inputReference.current.focus();
        // }
    }, []);



    useEffect(() => {
    if(countGuess>7) {
      setresult('ban da thua roi');
      setCheckResult(RESULT.thua);
      resetGame();
    }
    }, [countGuess]);

    useEffect(() => {
       if (checkResult===RESULT.thang) {
        setresult(`ban doan dung roi! so ngau nhien la ${randomNumber}`);
        resetGame();
       } 
   
      
    }, [checkResult]);
  return (
    <Container>
      <Header checkResult={checkResult} result={RESULT}/>
      <Body
        newGame = {newGame}
        countGuess = {countGuess}
        randomNumber = {randomNumber}
        inputValue = {inputValue}
        handleKeyDown = {handleKeyDown}
        disableInput = {disableInput}
        guess = {guess}
        onChangeData = {onChangeData}
      />
      <p>{result}</p>
    </Container>
  );
};

export default Main;
