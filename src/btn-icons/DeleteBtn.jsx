import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

function DeleteBtn() {
    return (
        <Tooltip title="Delete Task" placement="top">
            <DeleteIcon fontSize='small' className='text-primary' />
        </Tooltip>
        
    )
}

export default DeleteBtn;