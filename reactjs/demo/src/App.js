import './App.css'

//import SimpleExamples from "./components/SimpleExamples"
//import Counter from './components/Counter'
//import CounterFC from './components/CounterFC'
import TaskList from './components/TaskList'
//import Lorem from './components/exos/Lorem'
//import Addition from './components/exos/Addition'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
    return (
      <div className='App'>
        <Header />
        <TaskList />
        <Footer />
      </div>
    )
}