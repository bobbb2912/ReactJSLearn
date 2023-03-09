import React from 'react'

const Child = ({dataFromParent, name}) => {
    return (
        <div className='wrap-child'>
            <h3>Child</h3>
            <p>{dataFromParent}</p>
            <p>{name}</p>
        </div>
    );
};

export default Child;