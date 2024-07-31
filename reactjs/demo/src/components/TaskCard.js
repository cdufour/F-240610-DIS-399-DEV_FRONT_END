import './TaskCard.css'
import styles from './TaskCard.module.css'

const TaskCard = ({task, onDelete}) => {
    return (
        <div className='taskcard'>
            <li className={task.completed ? 'completed' : 'incomplete'} >
                <span className={styles.title}>{task.name}</span>
                <button onClick={ () => onDelete(task.id) } className="delete">
                    Supprimer</button>
            </li>
        </div>
    )
}

export default TaskCard