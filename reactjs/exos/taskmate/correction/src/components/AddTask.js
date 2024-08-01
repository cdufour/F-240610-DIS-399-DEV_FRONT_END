import React from 'react'

const AddTask = ({taskList, setTaskList, task, setTask}) => {

    const onSubmit = (e) => {
        e.preventDefault();

        if (task.id) {
            // update mode
            const date = new Date();
            const time = `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
            const updatedList = taskList.map(todo => (
                todo.id === task.id ? {id: task.id, name: task.name, time} : todo
            ));
            setTaskList(updatedList);
            setTask({}); // reset form
        } else {
            // insert mode
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            console.log(newTask);
            setTaskList([...taskList, newTask]); // update parent state
            setTask({}); // reset form
        }

    }

    return (
        <section className='addTask'>
            <form onSubmit={onSubmit}>
                <input type="text" autoComplete='off' placeholder='Ajouter une tâche' 
                    onChange={e => setTask({...task, name: e.target.value}) } name="task" value={task.name || ''}
                />
                <button type="submit">{ task.id ? 'Modifier' : 'Ajouter' }</button>
            </form>
        </section>
    )
}

export default AddTask