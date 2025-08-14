import React, { useRef, useState } from 'react';

const Ex_useref3 = () => {
    const timerRef = useRef(null)
    const [count, setCount] = useState(0)
    const [laps, setLaps] = useState([])

    const startTimer = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000)
        }
    }

    const stopTimer = () => {
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    const reset = () => {
        stopTimer();
        setCount(0);
        setLaps([]);
    }

    const recordLap = () => {
        setLaps((prevLaps) => [...prevLaps, count])
    }

    return (
        <>
            <p>카운트: {count}</p>
            <button onClick={startTimer}> 시작</button>
            <button onClick={stopTimer}> 정지</button>
            <button onClick={reset}>리셋</button>
            <button onClick={recordLap}>랩 기록</button>

            <h3>Lap 기록</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>
                        {index + 1}번째 Lap: {lap}초
                    </li>
                ))} 
                    
            </ul>

        </>
    );
};

export default Ex_useref3;