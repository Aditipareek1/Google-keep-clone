import './App.css';
import { useState } from 'react';
import React from 'react';
import Header from "./Header";
import CreateNode from './CreateNode';
import Note from './Note';

const App=()=>{

  const [item, setItem] = useState([]);

  const addNote=(note)=>{

    setItem(prevData =>{
      return [...prevData, note];
    })
  }

  const deleteNote=(id)=>{
    setItem((oldData)=>{
      return oldData.filter((currdata, idx)=>idx!== id)
    })
  }

  return(
    <>
    <Header/>
    <CreateNode passNote ={addNote}/>
    {item.map((curr, index)=>{
      return <Note id={index} deleteItem= {deleteNote} {...curr}/>
    })}
    {/* <Note/> */}
    </>
  )
}

export default App;
