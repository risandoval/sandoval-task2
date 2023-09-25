import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function TaskItem({ completed, id, title, checkTask, toggleEdit, editable, updateTask, deleteTask }) {
    const handleTitleChange = (e) => {
        updateTask(id, e.target.value);
    };

    return (
        <li
            className={`flex self-center justify-between w-full p-3 px-5 rounded-md bg-secondary 
                ${completed ? 'line-through' : ''}
            `}
        >
            <div className='flex gap-2'>
                <input type="checkbox" 
                    checked={completed} 
                    onChange={e => checkTask(id, e.target.checked)}
                />
                {editable ? (
                    <input
                        type="text"
                        className='px-1 bg-secondary border-b border-primary focus:outline-none'
                        value={title}
                        onChange={handleTitleChange}
                    />
                    ) : 
                    (<span className={completed ? 'completed-text' : ''}>{title}</span>)
                }
            </div>
            
            <div className="flex content-center gap-4">
                {/* Edit Task*/}
                <Tooltip 
                    title="Edit Task" 
                    placement="top"
                    onClick={() => toggleEdit(id)}
                >
                    {editable ? <CheckIcon fontSize='small' className='text-primary' /> : <EditIcon fontSize='small' className='text-primary' /> } 
                </Tooltip>
                
                {/* Delete Task*/}
                <Tooltip 
                    title="Delete Task" 
                    placement="top"
                    onClick={() => deleteTask(id)}
                >
                    <DeleteIcon fontSize='small' className='text-primary' />
                </Tooltip>
            </div>
        </li>
    )
}

export default TaskItem;