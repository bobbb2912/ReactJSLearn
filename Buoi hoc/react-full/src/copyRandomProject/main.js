import React, {useState, useEffect} from 'react';
import {Container, Row, Button, Form, InputGroup} from 'react-bootstrap';
// import {getRandomInt} from '../ultils/globalFunction';
import Body from './components/Body';
import Header from './components/Header';
import {getRandomInt} from './utils/globalFunction';

const RESULT = {
  thang: 'thang',
  thua: 'thua',
  doing: 'doing',
};
const Main = () => {
  const [countGuess, setCountGuess] = useState(0);
  const [randomNumber, setrandomNumber] = useState(null);
  const [inputValue, setinputValue] = useState('');
  const [result, setResult] = useState('');
  const [checkResult, setcheckResult] = useState(RESULT.doing);
  const newGame = (data) => {
    setCountGuess(0);
    createRandom();
    setResult('');
    setcheckResult(RESULT.doing);
    // alert(data);
  };
  const guess = () => {
    if (inputValue > randomNumber) {
      setResult('Số lớn quá rồi');
    } else if (inputValue < randomNumber) {
      setResult('Số nhỏ quá rồi');
    } else {
      setResult(`Bạn đoán đúng rồi số ngẫu nhiên là ${randomNumber}`);
      setcheckResult(RESULT.thang);
    }
    setCountGuess(countGuess + 1);
    setinputValue('');
  };

  useEffect(() => {
    createRandom();
  }, []);

  useEffect(() => {
    if (countGuess > 7) {
      setResult('Bạn đã thua rồi');
      setcheckResult(RESULT.thua);
    }
  }, [countGuess]);

  useEffect(() => {
    if (checkResult === RESULT.thang) {
      setResult('Sẽ reset game mới trong 5s...');
      setTimeout(() => {
        newGame();
      }, 5000);
    }
  }, [checkResult]);

  const createRandom = () => {
    const random = getRandomInt(1, 100);
    setrandomNumber(random);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      guess();
    }
  };
  const onChangeData = (text) => {
    setinputValue(text.target.value);
  };

  return (
    <Container>
      <Header checkResult={checkResult} result={RESULT} />
      <Body
        handleKeyDown={handleKeyDown}
        result={result}
        guess={guess}
        newGame={newGame}
        countGuess={countGuess}
        inputValue={inputValue}
        onChangeData={onChangeData}
      />
    </Container>
  );
};

export default Main;
