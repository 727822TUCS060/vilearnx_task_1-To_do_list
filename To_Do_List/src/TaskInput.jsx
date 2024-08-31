import { useState } from 'react';

function TaskInput({ addTask }) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-input">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new task"
            />
            <br/>
            <br/>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskInput;
