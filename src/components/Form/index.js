import {useState} from 'react'
import './style.css'

const Form = ({addToDo}) =>{

    const [savedValue, setSavedValue] = useState('')

    return(

        <>
            <h2>Add a toDo</h2>
            <input placeholder='Tarefa' value={savedValue} onChange={e=>setSavedValue(e.target.value)}/>
            <button onClick={()=>addToDo(savedValue)}>Add toDo</button>
        </>
    )
}

export default Form