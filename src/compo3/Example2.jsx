import React, { useEffect, useState } from 'react';

const Example2 = () => {

    const [count, setcount] = useState(0)
    const [history, sethistory] = useState([])
    useEffect (() => {
        console.log(`count 값이 변경됨: ${count}`);
        sethistory((prev) => [...prev, count])
        
    },[count])

    return (
        <div>
            <h2>예제 2: 상태 변경 감지+ 누적 기록</h2>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setcount(count +1)} >증가</button>
            <h3>변경 기록 </h3>
            <ul style={{listStyle : 'none'}}>
                {history.map((value, id) =>(
                    <li key={id} >{value}</li>
                ))}
            </ul>
        
        </div>
    );
};

export default Example2;