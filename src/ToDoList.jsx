import EditBtn from "./btn-icons/EditBtn";
import DeleteBtn from "./btn-icons/DeleteBtn";

function AddTask() {
    return (
        <div className="flex self-center w-1/3 gap-2 m-10">
            <input type="text" className="w-full p-2 border rounded-md"/>
            <button className="p-2 rounded-md text-bgColor bg-primary whitespace-nowrap">
                Add Task
            </button>
        </div>
    )
}

function ListTask() {
    return (
        <div className="flex self-center justify-between w-1/3 p-3 px-5 rounded-md bg-secondary">
            <p>Static Task</p>
            <div className="flex content-center gap-4">
                <EditBtn></EditBtn>
                <DeleteBtn></DeleteBtn>
            </div>
        </div>
    )
}

function ToDoList() {
    return (
        <div className="flex flex-col">
            <AddTask></AddTask>
            
            <ListTask></ListTask>
        </div>
    )
}

export default ToDoList;