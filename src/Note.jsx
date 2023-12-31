import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note=({id, title, content, deleteItem})=>{
    // const [item, setItem] = useState([]);

    const deleteIcon=()=>{
        deleteItem(id);
    }

    return(
    <>
        <div className="container">

            {/* {
                item.map(cur =>{
                    const { id } = cur;
                    
                })
            } */}

            <div className="note">
                <h1>{title}</h1>
                <hr style={{padding:"0"}} />
                <br/>
                <br/>
                <p>{content}</p>
                <button className="btn" onClick={deleteIcon}>
                <DeleteIcon className="deleteIcon"  />
                </button>
            </div>
        </div>
    </>
    )
}

export default Note;