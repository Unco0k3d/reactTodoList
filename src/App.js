import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import List from './components/List'

function App() {

const [inputText,setInputText]=useState('')
const [todos,setTodos]=useState([])
const [status,setStatus]=useState('')
const [filteredTodos,setFilteredTodos]=useState([])

useEffect(()=>{getTodosFromLocalStorage()},[])
useEffect(()=>{
  filterHandler()
  saveToLocalStorage()
},[todos,status])

const saveToLocalStorage=()=>{
  localStorage.setItem('todos',JSON.stringify(todos))
}
const getTodosFromLocalStorage=()=>{
  if(localStorage.getItem('todos')===null)
    localStorage.setItem('todos',JSON.stringify(todos))
  else setTodos(JSON.parse(localStorage.getItem('todos')))
}

const filterHandler=(e)=>{
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(t=>t.completed===true))
      break;
    case 'incomplete':
      setFilteredTodos(todos.filter(t=>t.completed===false))
      break;
      default:
        setFilteredTodos(todos)
  }
}

  return (
    <div className="App">
      <header className="app-header">
        <h1>What to do?</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        setFilteredTodos={setFilteredTodos}
       />
      <List 
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
