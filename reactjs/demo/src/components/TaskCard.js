import React from 'react'

const TaskCard = ({task, onDelete}) => {
    return (
        <li className={task.completed ? 'completed' : 'incomplete'} >
            <span>{task.name}</span>
            <button onClick={ () => onDelete(task.id) } className="delete">
                Supprimer</button>
        </li>
    )
}

export default TaskCard