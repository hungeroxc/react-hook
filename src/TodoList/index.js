import React from 'react'
import {useImmerReducer} from 'use-immer'
import TodoView from './TodoView'
import {TodoContext} from './TodoContext'

const todosReducer = (todos, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            todos.unshift({ text: action.text, complete: false })
            return
        case 'TOGGLE_COMPLETE':
            todos[action.i].complete = !todos[action.i].complete
            return
        case 'RESET':
            return []
        default:
            return todos
     }
}

const TodoList = () => {
    const [todos, dispatch] = useImmerReducer(todosReducer, [])

    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            <TodoView />
        </TodoContext.Provider>
    )
}

export default TodoList
