import {useState} from 'react'
import './style.css'


const Form = ({addToDo}) =>{

    const [savedValue, setSavedValue] = useState('')

    function add(){
        addToDo(savedValue)
        setSavedValue('')
    }

    return(

        <>
            <h2>Add a toDo</h2>
            <input placeholder='Tarefa' value={savedValue} onChange={e=>setSavedValue(e.target.value)}/>
            <button className='addButton' onClick={add}>Add to do</button>
        </>
    )
}

export default Form