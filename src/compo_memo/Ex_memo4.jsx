import React, { useMemo, useState } from 'react';
import { use } from 'react';
function Child({ config }) {
    console.log("Child 렌더링")
    return <div>Theme: {config.theme}</div>
};

const Ex_memo4 = () => {
    const [theme, setTheme] = useState("light")
    const [count, setCount] = useState(0)

    const config = useMemo(
        () => ({ theme }), [theme])
        
return (
    <>
        <Child config={config} />
        <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))}>
            테마 변경
        </button>

        <button onClick={() => setCount(c => c + 1)}> {count}</button>

    </>
);
}



export default Ex_memo4;