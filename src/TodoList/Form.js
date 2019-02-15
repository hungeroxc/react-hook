import React, {useState, useContext} from 'react'
import {TodoContext} from './TodoContext'

// 自定义hook
const useInputValue =  initValue => {
    const [value, setValue] = useState(initValue)

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue('')
    }
}

const TodoForm = React.memo(() => {
    console.log('rendering')
    const { resetValue, ...text } = useInputValue("")
    const { dispatch } = useContext(TodoContext)
    return (
        <form onSubmit={ e => {
            e.preventDefault();
            dispatch({ type: "ADD_TODO", text: text.value });
            resetValue();
        }}>
            <input type="text" { ...text } />
        </form>
    )
})

export default TodoForm
