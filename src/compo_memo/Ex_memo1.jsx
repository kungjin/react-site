import React, { useMemo, useState } from 'react';

const Ex_memo1 = () => {
    const [count, setcount] = useState(0)

    const double = useMemo(() => {
        console.log("아마도 계산중...")
        return count * 2;
    }, [count])

    return (
        <>
            <h1>카운트 {count}</h1>
            <h2> "묻고 더블로 가!" <br /><small style={{
                color: 'gray',
                fontSize: '10 px'
            }}>-Kwak Iron Dragon</small> <br /> {double}</h2>
            <button onClick={() => setcount(c => c + 1)}>+1</button>
        </>
    );
};

export default Ex_memo1;