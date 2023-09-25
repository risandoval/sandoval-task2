import { useState } from "react";

function AddTaskForm({onSubmit}) {
    const [newTask, setNewTask] = useState("");

    function saveTask(e) {
        e.preventDefault();

        if (newTask === "") return;

        onSubmit(newTask);

        setNewTask("");
    }

    return (
        // Add Task
        <form onSubmit={saveTask} className='flex flex-col pt-5'>
                <h1 className="p-2 text-2xl font-bold text-center text-primary">To Do List</h1>
                <div className="flex self-center w-1/3 gap-2 mx-10 mb-3">
                    <input type="text" 
                        id='task' 
                        value={newTask} 
                        onChange={e => setNewTask(e.target.value)} 
                        placeholder='Enter task...'
                        className="w-full p-2 border rounded-md" 
                    />
                    <button className="p-2 rounded-md text-bgColor bg-primary whitespace-nowrap">
                        Add Task
                    </button>
                </div>
        </form>
    )
}

export default AddTaskForm;