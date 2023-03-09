import React, {useState} from 'react'
import Child from './Child';

const number = 20;

const Parent = () => {
    const [number,  setNumber] = useState(90);
    const [showLight, setShowLight] = useState(false);
    const [product, setProduct] = useState([
        {name:'Iphone', price:20000},
        {name:'Android', price:5000},
        {name:'Macbook', price:10000},
        {name:'Window', price:7000},
    ]);

    //  tat ca event nhan vao 1 function, chu khong phai chay function
    const toggleChild = () => {
        setShowLight(!showLight);
    }

    const inCreeCount = (numberIncree) => {
        setNumber(number+numberIncree);
    }
    // de dam bao tat ca event luon nhan vao mot function, chu y tham so truyen vao
    // function khong co tham so: truyen truc tiep vao event
    // function co tham so: goi qua mot function khac

    return (
        <div>
            {/* <h2 onClick={() => inCreeCount(10)} className='parent-click'>Parent</h2> */}
            <p>
                <button onClick={toggleChild}>toggle child</button>
                <button onClick={() => {inCreeCount(10)}}>incree count</button>
            </p>
            <p>{number}</p>
            {showLight === true ? (
            <Child dataFromParent ={number} name={'tung'}/>
            ) : null}
            {/* khi render list thi luon luon phai add props key */}
            <ul> 
                
            {product.map((item, index) => {
                return(
                    <li className='product' key={index}>
                        <span>
                            {item.name} - {item.price}
                        </span>
                    </li>
                )
           })}
            </ul>
           
        </div>
    );
};

export default Parent;
// 2:06:08