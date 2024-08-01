import { useState, useEffect } from 'react'
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('taskList')) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    
  })

  return (
    <div className="App">
      <Header />
      <AddTask 
        task={task} 
        setTask={setTask} 
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ShowTask 
        task={task}
        setTask={setTask} 
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
