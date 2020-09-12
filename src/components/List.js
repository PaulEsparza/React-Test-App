import React, { useState, Fragment } from 'react';

const List = () => {

    const [array, setArray] = useState(["Nestor", "Paul", "Ejemplo", "Recorrido", "Array"]);

    const [addItemArray, setAddItemArray] = useState('new item');

    const [count, setCount] = useState(0);

    const addItem = () => {

        setAddItemArray("new item");

        setCount(count + 1);

        setArray([
            ...array,
            addItemArray + count
        ])
    }

    return(
        <Fragment>
            <h2>List</h2>
            <ul>
            {
                array.map((i, index) => 
                    <li key={i}>{i} - {index}</li>    
                )
            }
            </ul>
            <button onClick={addItem} className="btn btn-dark">Add item</button>
        </Fragment>
    );
}

export default List;