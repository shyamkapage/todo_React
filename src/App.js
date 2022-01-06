import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer' ;
import {AddTodo} from './MyComponents/AddTodo';
import React, { useState } from 'react';


function App() {

  const onDelete = (todo) => {
    setTodos(todos.filter( (e)=> {
      return e !== todo;
    }));
  }
  
  const [todos, setTodos] = useState([
    {
      id:1,
      title: "Go to the market",
      desc: "You need to go to the market "
    },
    {
      id:2,
      title: "Write blog",
      desc: "You need to write a blog "
    },
    {
      id:3,
      title: "Go to the mall",
      desc: "You need to go to the mall "
    }
  ]);

const addTodo = (title, desc) => {
  console.log("i am adding this "+ title,desc);
  let id = todos[todos.length-1].id + 1;
  const myTodo = {
    id: id,
    title: title,
    desc: desc
  }
}

  return (
    <>
      <Header title='My todo list' searchBar = {false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>

  );
}

export default App;
