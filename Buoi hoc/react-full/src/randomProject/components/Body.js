import React from 'react'
import {Row, Button, InputGroup, Form} from 'react-bootstrap';



export default function Body({
    newGame, 
    countGuess, 
    randomNumber, 
    inputValue, 
    handleKeyDown,
    disableInput, guess,
    onChangeData}) {
  return (
    <div>
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
        //   autoFocus
        //   ref={inputReference}
          onKeyDown={handleKeyDown}
          disabled={disableInput}
          onChange={onChangeData}
        />
        <Button onClick={guess} variant='success' id='button-addon2'>
          Guess
        </Button>
      </InputGroup>
    </div>
  )
}
