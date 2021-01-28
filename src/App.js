import { useState, useEffect } from 'react'
import Todos from './components/Todos'
import useLoad from './useLoad'

const App = () => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(async () => {
        const todos = await useLoad('https://jsonplaceholder.typicode.com/todos?_limit=10', setIsLoading)
        setTodos(todos)
    }, [])

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const addNew = title => {
        setTodos([...todos, {
            title,
            id: [...todos].pop()?.id + 1 || 1,
            completed: false
        }])
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col m6 offset-m3">
                    <h1>React Application</h1>
                    <Todos todos={todos} deleteHandler={deleteTodo} addHandler={addNew} isLoading={isLoading} />
                </div>
            </div>
        </div>
    )
}

export default App
