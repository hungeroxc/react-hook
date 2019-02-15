import React, {useState, useEffect, useMemo} from 'react'

function ChildA() {
    useEffect(
        () => {
            console.log('a更新了')
        }
    )
    return (
        <div>
            <div>a</div>
        </div>
    )
}

function ChildB() {
    useEffect(
        () => {
            console.log('b更新了')
        }
    )
    return (
        <div>
            <div>b</div>
        </div>
    )
}

function Memo () {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0) 

    const childA = useMemo(() => <ChildA />, [a])
    const childB = useMemo(() => <ChildB />, [b])

    return (
        <div>
            {/* <ChildA />
            <ChildB /> */}
            {childA}
            {childB}
            <div>{a}</div>
            <button onClick={() => setA(a + 1)}>+a</button>
            <div>{b}</div>
            <button onClick={() => setB(b + 1)}>+b</button>
        </div>
    )
}

export default Memo


