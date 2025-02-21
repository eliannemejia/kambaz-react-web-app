import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className="btn btn-success" style={{marginRight : "10px"}} onClick={() => setCount(count + 1)}
                id="wd-counter-up-click">Up</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}
                id="wd-counter-down-click">Down</button>
            <hr /></div>
    );
}