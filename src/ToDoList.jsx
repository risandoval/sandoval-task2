import TaskItem from './TaskItem';

function ToDoList({ todos, checkTask, toggleEdit, updateTask, deleteTask }) {
    return (
        <ul className="flex flex-col self-center gap-2 w-1/3">
                {todos.length === 0 && "You have no task!"}
                {todos.map(todo => {
                    return (
                        <TaskItem 
                            {...todo}
                            key={todo.id}
                            checkTask={checkTask}
                            toggleEdit={toggleEdit}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                        />
                    )
                })}
            </ul>
    )
}

export default ToDoList;