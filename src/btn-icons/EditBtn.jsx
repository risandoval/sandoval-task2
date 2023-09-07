import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';

function EditBtn() {
    return (
        <Tooltip title="Edit Task" placement="top">
            <EditIcon fontSize='small' className='text-primary' />
        </Tooltip>
        
    )
}

export default EditBtn;