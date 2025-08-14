import React, { use, useMemo, useState } from 'react';
function heavyCalculation(num) {
    console.log("~ 힘겹게 계산 중....")
    let total = 0
    for (let i = 0; i < 1e7; i++)
        total += num;
    return total
}

const Ex_memo2 = () => {
    const [num, setNum] = useState(1)
    const [theme, setTheme] = useState(false)

    const total = useMemo(
        () => heavyCalculation(num), [num]
    )

    return (
        <div style={{
            background: theme ? "#222" : "#e7e363ff",
            color: theme ? "#fff" : "#000"
        }}>
            <input
                type="number"
                value={num}
                onChange={e => setNum(Number(e.target.value))}

            />
            <p>결과: {total} </p>
            <button onClick={() => setTheme(t => !t)}>테마 변경</button>


        </div>
    );
};

export default Ex_memo2;