import React, { useState } from "react";

function Counter() {
    // let count = 7;
    // console.log(count);

    // return (
    //     <div>
    //         <h2>Counter: {count}</h2>
    //         <button
    //             onClick={() => { count++; console.log(count); }}>
    //             Up
    //         </button>
    //         <button
    //             onClick={() => { count--; console.log(count); }}>
    //             Down
    //         </button>
    //     </div>
    // );

    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className="btn btn-primary m-2" onClick={() => setCount(count + 1)}>Up</button>
            <button className="btn btn-primary m-2" onClick={() => setCount(count - 1)}>Down</button>
        </div>
    );

}

export default Counter;