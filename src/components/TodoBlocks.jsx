import React from 'react'

const TodoBlocks = ({ todos, setTodos }) => {

    const todoBlock = todos.filter(todo => todo.situação == 0);
    const doingBlock = todos.filter(todo => todo.situação == 1);
    const doneBlock = todos.filter(todo => todo.situação == 2);

    const moveTask = (todoId, direção) => {
      const updatedTasks = todos.map((todo) => {
        if (todo.id == todoId && direção == "d"){
          todo.situação ++;
        }
        else if(todo.id == todoId && direção == "e"){
            todo.situação --;
        }
        return todo;
      });
      setTodos(updatedTasks);
    };

    

  return (
    <div className='todos'>
        <div className='todo-block'>
          <div className='block-Title'><p>TO DO</p></div>
          <div className='gridTodos'>
          {todoBlock.map((todo) =>(
            <div className="content">
            <p>{todo.Nome}</p>
            <button onClick={() => moveTask(todo.id, "d")} className='seta'>ᐅ</button>
          </div>
          ))}
          </div>
        </div>
        <div className='todo-block'>
          <div className='block-Title'><p>DOING</p></div>
          <div className='gridTodos'>
          {doingBlock.map((todo) =>(
            <div className="content">
            <button onClick={() => moveTask(todo.id, "e")} className='seta'>ᐊ</button>
            <p>{todo.Nome}</p>
            <button onClick={() => moveTask(todo.id, "d")} className='seta'>ᐅ</button>
          </div>
          ))}
          </div>
        </div>
        <div className='todo-block'>
          <div className='block-Title'><p>DONE</p></div>
          <div className='gridTodos'>
          {doneBlock.map((todo) =>(
            <div className="content">
            <button onClick={() => moveTask(todo.id, "e")} className='seta'>ᐊ</button>
            <p>{todo.Nome}</p>
          </div>
          ))}
          </div>
        </div>
      </div>
  )
}

export default TodoBlocks