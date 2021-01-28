import { useState } from 'react'

const Input = ({ addHandler }) => {
    const [name, setName] = useState('')

    return (
        <form
            onSubmit={e => {
            e.preventDefault()
            addHandler(name)
            setName('')
        }}>
            <input type="text" name="name" placeholder="Add new todo" value={name} onChange={e => setName(e.target.value)}/>
        </form>
    )
}

export default Input
