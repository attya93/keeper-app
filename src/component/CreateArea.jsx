import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })

        event.preventDefault();
    }
    function handleNote(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return {
                ...prevValue, [name]: value
            }
        })
    }
    function handleExpaned() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {
                    isExpanded &&
                    <input onChange={handleNote} name="title" placeholder="title" value={note.title}
                    />}
                <textarea
                    onChange={handleNote}
                    onClick={handleExpaned}
                    name="content"
                    placeholder="Take a note."
                    value={note.content}
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={handleClick}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;