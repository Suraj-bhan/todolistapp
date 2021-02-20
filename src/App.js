import React, {useState} from 'react'
import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist'
function App() {
  const [Inputtext, setInputtext] = useState("");
  return (
    <div className="App">
      <header>
        <h1>SBM's To-do List</h1>
      </header>
      <Form setInputtext={setInputtext}/>
      <Todolist/>
    </div>
  );
}

export default App;
