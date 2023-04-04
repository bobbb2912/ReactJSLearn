import React from 'react';
import {Row} from 'react-bootstrap';

const Header = ({checkResult, result}) => {
  return (
    <Row>
      <div
        // style state
        className={`fs-1 text-center m-5 fw-bold ${
          checkResult === result.thang
            ? 'text-success'
            : checkResult === result.thua
            ? 'text-danger'
            : 'text-black'
        } `}
      >
        Random Number (1-100)
      </div>
    </Row>
  );
};

export default Header;
