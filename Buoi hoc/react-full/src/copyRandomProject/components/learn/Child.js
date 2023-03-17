import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';

const Child = ({name, dataFromParent, handleClickChild}) => {
  const [childData, setChildData] = useState('hello. đây là dữ liệu từ child');
  useEffect(() => {
    console.log(
      'mounting: hay dùng cho những hành động muốn làm khi component xuất hiện',
    );

    // const time = setInterval(() => {
    //   console.log('counting');
    // }, 1000);
    // return () => {
    //   clearInterval(time);
    //   console.log('unmouting: dùng để clear data khi thoát component');
    // };
  }, []);

  return (
    <div className='wrap-child'>
      <h3>Child</h3>
      <p>{dataFromParent}</p>
      <p>{name}</p>
      <Button
        onClick={() => {
          handleClickChild(childData);
        }}
        variant='success'
      >
        Move data from child to parent
      </Button>
    </div>
  );
};

export default Child;
