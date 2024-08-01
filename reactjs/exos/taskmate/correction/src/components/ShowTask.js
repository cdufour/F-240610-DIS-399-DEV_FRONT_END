import React from 'react'

const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const onEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id);
        setTask(selectedTask);
    }

    const onDelete = (id) => {
        const updatedList = taskList.filter(todo => todo.id !== id);
        setTaskList(updatedList);
    }

    return (
        <section className='showTask'>
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{taskList.length}</span>
                </div>
                <button onClick={() => setTaskList([])} className='clearAll'>Effacer tout</button>
            </div>
            <ul>
                { taskList.map(todo => (
                    <li key={todo.id}>
                        <p>
                            <span className='name'>{todo.name}</span>
                            <span className='time'>{todo.time}</span>
                        </p>
                        <i className='bi bi-pencil-square' onClick={() => onEdit(todo.id)}></i>
                        <i className='bi bi-trash' onClick={() => onDelete(todo.id)}></i>
                    </li>
                ))

                }
            </ul>
        </section>
    )
}

export default ShowTask