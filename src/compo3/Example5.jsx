import React, { use, useEffect, useState } from 'react';

const Example5 = () => {
    const [width, setwidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setwidth(window.innerWidth)
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
    }
    }, [])


    return (
        <div>
            <h2>예제 5: 윈도우 크기 감지</h2>
            <p>현재 너비: {width}px</p>
        </div>
    );
};

export default Example5;