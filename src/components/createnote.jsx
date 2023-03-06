import React, { useState } from "react";

function Createnote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function confirm(e) {
    e.preventDefault();
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

return (
  <div className="newNoteContainer">
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
);
}
export default Createnote;
