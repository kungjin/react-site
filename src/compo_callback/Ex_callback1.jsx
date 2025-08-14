import React, { useState, useCallback } from 'react';

const Ex_callback1 = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(() => {
        setCount((prev) => prev +1)
    },[])
    console.log("컴포넌트 렌더링")

    return (
        <>
         <h1> {count} <br />카운트</h1>
         <button onClick={handleIncrement}>+1 증가</button>   
        </>
    );
};

export default Ex_callback1;