import './style.css'
const ToDoList = ({handleToDo, toDos}) =>{
    return(
        <>
        <ul>
            {toDos.map((item, index)=><li key={index}>{item} <button className='removeButton' onClick={()=>handleToDo(item)} key={index}>Remove to do</button></li>)}
        </ul>
        </>
    )
}

export default ToDoList