import React, { useEffect, useState } from "react";
import Note from "./note";

function Noteshelf() {
  const [data ,setData]=useState([]);
  
  useEffect(()=>{
    fetch("http://localhost:5000/", {
        method: "get",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => {
        return response.json()
      }).then((result) => {
          setData(result['allNotes']);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
  },[])
  return (
    <div className="noteShelfContainer">
      
      {data.map((note)=><Note title={note.title} key={note._id} id={note._id} color={note.background} date={note.date}/>)}
    </div>
  );
}

export default Noteshelf;
//result['allNotes'][0]['title']