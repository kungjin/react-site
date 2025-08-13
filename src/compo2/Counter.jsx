import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>

            <h2>카우운터
                <br />
                {count}</h2>
            <button onClick={() => setCount(count + 1)}>++1 증가버튼</button>
            <button onClick={() => setCount(count - 1)}>--1 감소버튼</button>
            <button onClick={() => setCount(count * 2)}>*2 곱버튼</button>

        </>

    )

}