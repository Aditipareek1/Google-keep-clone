import React, { useState } from "react";

const CreateNode =(props)=>{
    const [title, setTitle] = useState("Write a Note!");
    const[show, setShow] = useState(false);
    const[note, setNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent=(event)=>{
        const {name, value} = event.target ;
        
        setNote(prevNode=>({
                ...prevNode,
                [name] : value,
        }))

    }

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    }
    return(
        <>
            <div className="main_note">
                <form>
                    <input type='text' name="title" placeholder={title} onClick={()=>{setShow(true); setTitle("Title");}} onChange={InputEvent} value={note.title}/>
                    {show && <div className="note_body">
                    <textarea name="content" placeholder="Write a note" onChange={InputEvent} value={note.content}/>
                    <button onClick={addEvent} className="saveButton" type="button" >Save</button>
                    </div>}
                </form>
            </div>
        </>
    )
}

export default CreateNode;