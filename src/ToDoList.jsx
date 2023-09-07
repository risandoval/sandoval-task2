function AddTask() {
    return (
        <div className="flex m-10 bg-secondary">
            <input type="text" className="w-full border"/>
            <button className="bg">
                Add Task
            </button>
        </div>
    )
}

function ToDoList() {
    return (
        <div className="flex flex-col bg-primary">
            <AddTask></AddTask>
        </div>
    )
}

export default ToDoList;