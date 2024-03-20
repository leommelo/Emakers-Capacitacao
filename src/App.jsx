import { useState } from 'react'

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      Nome: "Criar capacitação",
      situação: 0,
    },
    {
      id: 2,
      Nome: "Criar cuzinho",
      situação: 0,
    },
    {
      id: 1,
      Nome: "Criar piruzinho",
      situação: 0,
    }
  ]);

  return (
    <div >
      <div className='topo'>
        <div className='title'><p id='cu'>To do List</p></div>
      </div>
      <div className='bottom'>
      <div className='todos'>
        <div className='todo-block'>
          <div className='block-Title'><p>To Do</p></div>
          {todos.map((todo) =>(
            <div className="content">
              <p>{todo.Nome}</p>
              <button className='seta'>⮕</button>
            </div>
          ))}
        </div>
        <div className='todo-block'>
          <div className='block-Title'><p>Doing</p></div>
        </div>
          <div className='todo-block'>
        <div className='block-Title'><p>Done</p></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
