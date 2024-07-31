import { useState } from 'react'
import './AddTask.css'

const AddTask = ({tasks, setTasks}) => {

    const [taskValue, setTaskValue] = useState('');
    const [completed, setCompleted] = useState('false');

    const onChange = (e) => {
        setTaskValue(e.target.value);
    }

    const onReset = (e) => {
        setTaskValue('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let taskCompleted = true
        if (completed === 'false') {
            taskCompleted = false;
        }

        const task = {
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            //completed: Boolean(completed)
            completed: taskCompleted
        };
    
        setTasks([...tasks, task]);
    }

    return (
        <section className='addtask'>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange} 
                    type="text" 
                    placeholder="Nom de la tâche"
                    autoComplete="off"
                    name="task"
                    value={taskValue}
                />
                <select 
                    onChange={(e) => setCompleted(e.target.value)}
                    value={completed} 
                >
                    <option value="false">En cours</option>
                    <option value="true">Terminée</option>
                </select>
                <span className='reset' onClick={onReset}>Effacer</span>
                <button type="submit">Ajouter la tâche</button>
            </form>
            <p>{taskValue.length}</p>
        </section>
    )
}

export default AddTask