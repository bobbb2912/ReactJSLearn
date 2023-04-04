import React from 'react';
import {Row, Button, InputGroup, Form} from 'react-bootstrap';
import Result from './Result';
const Body = ({
  countGuess,
  newGame,
  inputValue,
  guess,
  result,
  handleKeyDown,
  onChangeData,
}) => {
  return (
    <div>
      <Row>
        <Button onClick={() => newGame('hello')} variant='primary'>
          New game
        </Button>
      </Row>
      <p className='my-2'>Số lần đoán của bạn là: {countGuess}</p>
      <InputGroup className='mb-3'>
        <Form.Control
          placeholder='Input number'
          aria-label='Input number'
          aria-describedby='basic-addon2'
          type='number'
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={onChangeData}
        />
        <Button onClick={guess} variant='success' id='button-addon2'>
          Guess
        </Button>
      </InputGroup>
      <Result result={result} />
    </div>
  );
};

export default Body;
