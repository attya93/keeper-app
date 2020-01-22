import React, { useState } from 'react';
import Header from './Header';
import Footer from './footer'
import CreateArea from './CreateArea'
import Note from './note';




function App() {
    const [note, setNote] = useState([]);
    function createNote(newNote) {
        setNote(prevNote => {
            return [...prevNote, newNote]
        })
    }
    function deleteNote(id) {
        setNote(prevNote => {
            return prevNote.filter((item, index) => {
                return index !== id
            })
        })
    }
    return <div>
        <Header></Header>
        <CreateArea onAdd={createNote} />
        {note.map((noteItem, index) => {
            return <Note onDelete={deleteNote} key={index} id={index} title={noteItem.title} content={noteItem.content} />
        })}
        <Footer></Footer>

    </div >
}
export default App;