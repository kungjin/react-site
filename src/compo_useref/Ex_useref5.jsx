import React, { useRef } from 'react';

const Ex_useref5 = () => {
    const itemsRef = useRef([])

    const addItem =() => {
        const newItem = `Item ${itemsRef.current.length + 1}`
        //배열에 직접 추가 (setSate x)
        itemsRef.current =[...itemsRef.current, newItem]

        //콘솔에서 배열 확인 
        console.log(itemsRef.current)
    }


    return (
        <>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {itemsRef.current.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default Ex_useref5;