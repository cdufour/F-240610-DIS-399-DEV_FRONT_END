import { useState } from 'react'
import './TaskList.css'
import TaskCard from './TaskCard'

export default function TaskList() {
    const [tasks, setTasks] = useState([
        {id: 5271, name: 'Nettoyer le garage', completed: true},
        {id: 7825, name: 'Apprendre le russe', completed: false},
        {id: 8391, name: 'Divorcer', completed: false}
    ])

    const [show, setShow] = useState(true);

    function onDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="App">
            <h2>Liste des tâches</h2>
            <button className='trigger' onClick={() => setShow(!show)}>
                { show ? 'Masquer' : 'Afficher' }
            </button>

            {show &&
            <ul>
            { tasks.map(task => (
                <TaskCard key={task.id} task={task} onDelete={onDelete} />
            ))}
            </ul>
            }

        </div>
    )

}