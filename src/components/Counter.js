import React, { Fragment, useState } from 'react';

const Counter = () => {

    const [count, setCount]= useState(0);

    const addCount = () => {
        setCount(count + 1);
    };

    const substract = () => {
        setCount(count - 1);
    };

    return(
        <div className="mt-4">
            <h3 className="m-2">Counter = {count}</h3>
            <button className="btn btn-success m-2" onClick={addCount}>Add</button>
            <button className="btn btn-danger" onClick={substract}>Substract</button>
        </div>
    );
}

export default Counter;