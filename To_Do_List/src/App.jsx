import { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './index.css';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const editTask = (oldTask, newTask) => {
        setTasks(tasks.map((task) => (task === oldTask ? newTask : task)));
    };

    const deleteTask = (taskToDelete) => {
        setTasks(tasks.filter((task) => task !== taskToDelete));
    };

    return (
        <div className="app-container">
            <h1>To-Do List</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
