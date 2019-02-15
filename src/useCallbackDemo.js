import React, {useState, useCallback} from 'react'

export default () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    return (
        <div>
            <div>{count}</div>
            <button onClick={useCallback(() => setCount(count + 2), [count])}>点击</button>
            <div>{count1}</div>
            <button onClick={useCallback(() => setCount1(count1 + 1), [count1])}>点击</button>
        </div>
    )
}
