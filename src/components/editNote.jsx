import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LogNav from './logNav';
import Searchbar from './searchbar';

function EditNote() {
    const {id } =useParams();
const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const selector = useSelector((state)=>state.color.value);
  const Auth = useSelector((state)=>state.color.auth);
  const [color, setColor] = useState(selector);

 async function confirm(e) {
    e.preventDefault();
    if (title === "") {
      toast.error("title is Required");
  }
  if(content === ''){
      toast.error("content is Required");
  }
  if (title !== "" && content !== ""){
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/editenode/${id}`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content}),
    }).then(()=>{ 
    }).catch((error)=>{
        console.log(error);
    });
  }
}
useEffect(()=>{
    fetch(`${process.env.REACT_APP_BACKEND_URL}/editenode/${id}`, {
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => {
       return response.json();
      })
      .then((result) => {
        setTitle(result["note"].title);
        setContent(result["note"].content);
        setColor(result["note"].background)
        })
        .catch((error) => {
          console.log(error);
        });
  },[])
  return (
    <div className="mainContainer">
      <ToastContainer />
      {(Auth)?<LogNav />:<Searchbar />}
      <div className="newNoteContainer" style={{backgroundColor:color}}>
    <form onSubmit={confirm}>
      <label>Title : </label>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="titleNote"
      ></input>
      <label>Your text : </label>
      <input
        name="content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="titleNote"
      ></input>
      <button className="buttonSave" onClick={confirm}>
        Save
      </button>
    </form>
  </div>
  </div>
);
}

export default EditNote