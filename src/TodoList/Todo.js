import React, {useContext} from 'react'
import {TodoContext} from './TodoContext'

export default () => {
    const {todos, dispatch} = useContext(TodoContext)
    return (
        <div>
            {
                todos.map((todo, i) => 
                    <div 
                        style={{ textDecoration: todo.complete ? 'line-through' : '' }}
                        onClick={() => dispatch({ type: "TOGGLE_COMPLETE", i })}
                        key={i}
                    >
                    {todo.text}
                    </div>
                )
            }
        </div>
    )
}


