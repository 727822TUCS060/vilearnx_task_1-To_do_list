import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, deleteTask }) {
    return (
        <ul className="task-list">
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    editTask={editTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
