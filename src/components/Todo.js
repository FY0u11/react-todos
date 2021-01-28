import { useState } from 'react'

const Todo = ({ todo, deleteHandler }) => {
    const [isChecked, setIsChecked] = useState(todo.completed)

    return (
        <li className="collection-item">
            <label htmlFor={todo.id}>
                <input
                    type="checkbox"
                    className="filled-in"
                    defaultChecked={isChecked}
                    id={todo.id}
                    onChange={() => setIsChecked(!isChecked)}
                />
                <span className={isChecked ? 'completed' : 'black-text'}>{todo.title}</span>
            </label>
            <a href="#!" className="secondary-content" onClick={() => deleteHandler(todo.id)}>
                <i className="material-icons">close</i>
            </a>
        </li>
    )
}

export default Todo
