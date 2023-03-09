import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searchbar from "./searchbar";
import {changeColor} from "./redux/reducer"
import { toast, ToastContainer } from "react-toastify";
function Createnote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const selector = useSelector((state)=>state);
  
  const dispatch = useDispatch();
  function toggle(){
    dispatch(changeColor("black"))
  }


  async function confirm(e) {
    e.preventDefault();
    if (title === "") {
      toast.error("title is Required");
  }
  if(content === ''){
      toast.error("content is Required");
  }
  if (title !== "" && content !== ""){
    await fetch("http://localhost:5000/createnote", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    }).then(()=>{
      console.log('done');
    }).catch((error)=>{
        console.log(error);
    });
  }
    
  }
  console.log(selector);

return (
  <div className="mainContainer">
      <ToastContainer />
      <Searchbar />
      <div className="newNoteContainer" style={{backgroundColor:{selector}}}>
    <form onSubmit={confirm}>
      <label>Title : </label>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Your note title ..."
        className="titleNote"
      ></input>
      <label>Your text : </label>
      <input
        name="content"
        type="text"
        placeholder="Your note text ..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="titleNote"
      ></input>
      <button className="buttonSave" onClick={toggle}>
        Save
      </button>
    </form>
  </div>
  </div>
);
}
export default Createnote;
