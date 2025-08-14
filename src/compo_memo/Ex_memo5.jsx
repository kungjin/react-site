import React, { useMemo, useState } from 'react';



const Ex_memo5 = () => {
    // css const로 줘보기 
    const borderStyle = {
        border : '1px solid #000',
        margin : '20px',
        fontWeight : 'bold',
    }

    const[price, setPrice] = useState(1000)
    const[quantity, setQuantity] = useState(1)
    const[discount, setDiscount] = useState(0.1)

    const total = useMemo(() => {
        console.log("~ 총액계산")
        return price *quantity * (1 -discount)
    },[price,quantity,discount])

    return (
        <>
            <label>
                가격: <input type="number"
                value={price} onChange={e => setPrice(+e.target.value)}
                />
            </label><br />
            <label>
                수량: <input type="number"
                value={quantity} onChange={e => setQuantity(+e.target.value)}
                />
            </label><br />
            <label>
                할인: <input type="number"
                value={discount} onChange={e => setDiscount(+e.target.value)}
                />
            </label><br />

            <h2 style={borderStyle}>총액: {total.toLocaleString()}원</h2>

        </>
    );
};

export default Ex_memo5;