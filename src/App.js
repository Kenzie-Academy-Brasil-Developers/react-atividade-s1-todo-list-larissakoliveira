
import './App.css';
import { useState } from 'react'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const [toDos, setToDos] = useState([])

  const addToDo = (newToDo) =>{
    setToDos([...toDos, newToDo])
  }

  const handleToDo = (removeItem) => {
    const toDosFilter = toDos.filter((item)=>(item !== removeItem))
    setToDos(toDosFilter)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Form addToDo = {addToDo}/>
        <ToDoList handleToDo = {handleToDo} toDos = {toDos}/>
      </div>
    </div>
  );
}

export default App;

