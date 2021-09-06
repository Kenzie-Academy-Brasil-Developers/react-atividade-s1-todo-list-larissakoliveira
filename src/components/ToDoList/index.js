
const ToDoList = ({handleToDo, toDos}) =>{
    return(
        <>
        <ul>
            {toDos.map((item, index)=><li key={index}>{item} <button onClick={handleToDo(item)} key={index}>Remove toDo</button></li>)}
        </ul>
        </>
    )
}

export default ToDoList