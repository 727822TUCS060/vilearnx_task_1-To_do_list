import { useState } from 'react';

function TaskItem({ task, editTask, deleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);

    const handleEdit = () => {
        if (isEditing) {
            editTask(task, newTask);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li className="task-item">
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
            ) : (
                <span>{task}</span>
            )}
            <button onClick={handleEdit}>
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button onClick={() => deleteTask(task)}>Delete</button>
        </li>
    );
}

export default TaskItem;
