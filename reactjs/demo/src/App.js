import { useState } from 'react'
import './App.css'

//import SimpleExamples from "./components/SimpleExamples"
//import Counter from './components/Counter'
//import CounterFC from './components/CounterFC'
import TaskList from './components/TaskList'
//import Lorem from './components/exos/Lorem'
//import Addition from './components/exos/Addition'
import Header from './components/Header'
import Footer from './components/Footer'
import AddTask from './components/AddTask';

export default function App() {

  const [tasks, setTasks] = useState([]);

  return (
    <div className='App'>
      <Header />
      <main>
        <AddTask tasks={tasks} setTasks={setTasks}  />
        <TaskList tasks={tasks} setTasks={setTasks}  />
      </main>
      <Footer />
    </div>
  )
}