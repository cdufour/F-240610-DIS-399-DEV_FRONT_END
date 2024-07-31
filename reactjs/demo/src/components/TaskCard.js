import React from 'react'
import './TaskCard.css'

const TaskCard = ({task, onDelete}) => {
    return (
        <div className='taskcard'>
            <li className={task.completed ? 'completed' : 'incomplete'} >
                <span>{task.name}</span>
                <button onClick={ () => onDelete(task.id) } className="delete">
                    Supprimer</button>
            </li>
        </div>
    )
}

export default TaskCard