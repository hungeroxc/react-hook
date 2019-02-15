import React, {useContext} from 'react'
import {TodoContext} from './TodoContext'

// export default () => {
//     const {dispatch} = useContext(TodoContext)
//     return (
//         <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
//     )
// }

export default class ResetButton extends React.Component {
    static contextType = TodoContext
    render() {
        const {dispatch} = this.context
        return (
            <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
        )
    }
}



