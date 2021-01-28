import Todo from './Todo'
import Input from './Input'
import Preloader from './Preloader'

const Todos = ({ todos, deleteHandler, addHandler, isLoading }) => {
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4>My todos list</h4>
                <Input addHandler={addHandler} />
            </li>
            {
                isLoading
                    ?
                        <li className="collection-item center-align">
                            <Preloader />
                        </li>
                    : todos.length
                        ? todos.map(todo => {
                            return <Todo todo={todo} deleteHandler={deleteHandler} key={todo.id} />
                        })
                        : <li className="collection-item">There are no todos left</li>
            }
        </ul>
    )
}

export default Todos
