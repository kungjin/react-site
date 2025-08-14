import React, { useCallback, useState } from 'react';

const Ex_callback3 = () => {
    const[count, setCount] = useState(0)
    const[step, setStep] = useState(1)

    const increment = useCallback(() => {
        setCount((prev) => prev +step)
    },[step])

      const reset = useCallback(() => {
    setCount(0);
  }, []);


    return (
        <>
            <p>count: {count}</p>
            <input type="number"
            value={step} onChange={(e) => setStep(Number(e.target.value)) } 
            />
            <br />
            <button onClick={increment}>증가</button>
            <button onClick={reset}>리셋</button>
        </>
    );
};

export default Ex_callback3;