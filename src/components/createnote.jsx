import React, { useState } from "react";
import Searchbar from "./searchbar";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogNav from "./logNav";

function Createnote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 const selector = useSelector((state)=>state.color.value);
 const Auth = useSelector((state)=>state.color.auth);
 const Theme = useSelector((state)=>state.color.theme);

 const Navigate=useNavigate();

 const date = new Date();
const cuurentDate =date.toDateString().replaceAll(" ",",");
  async function confirm(e) {
    e.preventDefault();
    if (title === "") {
      toast.error("title is Required");
  }
  if(content === ''){
      toast.error("content is Required");
  }
  if (title !== "" && content !== ""){
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/createnote`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content , selector, cuurentDate}),
    }).then(()=>{ 
      Navigate("/home")
      console.log('done');
    }).catch((error)=>{
        console.log(error);
    });
  }

  }
    
  

return (
  <div className={`mainContainer ${(Theme=== false)?"":"dark"}`}>
      <ToastContainer />
      {(Auth)?<LogNav />:<Searchbar />}
      <div className="newNoteContainer" style={{backgroundColor:selector}}>
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
      <button className="buttonSave">
        Save
      </button>
    </form>
  </div>
  </div>
);
}
export default Createnote;
