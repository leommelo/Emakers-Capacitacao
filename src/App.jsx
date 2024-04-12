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
      Nome: "Varrer a salinha",
      situação: 0,
    },
    {
      id: 3,
      Nome: "Estudar para grafos",
      situação: 0,
    }
  ]);

  return (
    <div >
      <div className='topo'>
        <div className='title'><p id='cu'>To do List</p></div>
        <div className='cab'>
          <div className='input'>
            <input type="text" placeholder='Ex: Levar o lixo para a rua' />
            <button id='butaoInput'>Adicionar tarefa</button>
          </div>
        </div>
      </div>
      <div className='barraLaranja'></div>
      <div className='bottom'>
      <div className='todos'>
        <div className='todo-block'>
          <div className='block-Title'><p>TO DO</p></div>
          {todos.map((todo) =>(
            <div className="content">
              <p>{todo.Nome}</p>
              <button className='seta'>⮕</button>
            </div>
          ))}
        </div>
        <div className='todo-block'>
          <div className='block-Title'><p>DOING</p></div>
          <button className='seta'>⮕</button>
        </div>
        <div className='todo-block'>
          <div className='block-Title'><p>DONE</p></div>
          <button className='seta'>⮕</button>
        </div>
      </div>
      <div className='rodaPe'>
        <div className='logo'></div>
      </div>
      </div>
    </div>
  )
}

export default App
