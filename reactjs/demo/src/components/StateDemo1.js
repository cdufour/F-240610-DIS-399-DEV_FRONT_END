import { useState } from 'react'
import './StateDemo1.css'

export default function StateDemo1() {
    const [tasks, setTasks] = useState([
        {id: 5271, name: 'Nettoyer le garage', completed: true},
        {id: 7825, name: 'Apprendre le russe', completed: false},
        {id: 8391, name: 'Divorcer', completed: false}
    ])

    function onDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="App">
            <h2>Liste des tâches</h2>
            <ul>
            { tasks.map(task => (
                <li key={task.id}>
                    <span>{task.name}</span>
                    <button onClick={ () => onDelete(task.id) } className="delete">
                        Supprimer</button>
                </li>
            ))}
            </ul>
        </div>
    )

}