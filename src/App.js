import React, {useState, useEffect} from 'react'

const api = 'https://randomuser.me/api/' 

const useFetch = url => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const res = await fetch(url)
            const data = await res.json()
            const [item] = data.results
            setData(item)
            setLoading(false)
        })()
    },[])

    return {
        loading,
        data
    }

}

function App() {
    const [count, setCount] = useState(0)
    const {loading, data} = useFetch(api)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>点击</button>
            {
                loading
                ?
                <div>loading........</div>
                :
                <div>{data.name.first}</div>
            }
        </div>
    )
}

export default App

