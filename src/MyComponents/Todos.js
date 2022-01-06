import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = ({todos, onDelete}) => {
          return (
                    <div className='container my-5'>
                              <h3 >Todos List</h3>
                           
                              {(todos.length === 0) ? "No TodoItem to display" : 
                              todos.map((todo)=>{
                                        return <TodoItem key={todo.id} todo = {todo} onDelete= {onDelete} />
                              })
                              }
                              
                    </div>
          )
}
