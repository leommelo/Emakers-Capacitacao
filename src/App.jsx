import { useState } from 'react'

import TodoBlocks from './components/TodoBlocks';
import TodoCreate from './components/TodoCreate';


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
      id: 3,
      Nome: "Criar piruzinho",
      situação: 0,
    }
  ]);

  const addTodo = (Nome) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      Nome,
      situação: 0,
    },
  ];

  setTodos(newTodos);
  };



  return (
    <div >
      <div className='topo'>
        <div className='title'><p id='cu'>To do List</p></div>
        <div className='barra'></div>
        <div className='cab'> </div>       
        <TodoCreate addTodo={addTodo}/>
      </div>      
      <div className='barraLaranja'></div>
      <div className='bottom'>
        <TodoBlocks todos={todos} setTodos={setTodos}/>
      <div className='rodaPe'>
        <div className='logo'></div>
      </div>
      </div>
    </div>
  )
}

export default App
