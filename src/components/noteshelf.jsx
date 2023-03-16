import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Note from "./note";

function Noteshelf() {
  const [data ,setData]=useState([]);
  const auth = useSelector((state) => state.color.auth);
  const searchValue = useSelector((state) => state.color.search);
  

  useEffect(()=>{
    if(auth){
      if(searchValue === ""){
        fetch(`${process.env.REACT_APP_BACKEND_URL}/home`, {
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
      }else{
        fetch(`${process.env.REACT_APP_BACKEND_URL}/home/${searchValue}`, {
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
      }
    }
  },[searchValue])
  return (
    <div className="noteShelfContainer">
      
      {data.map((note)=><Note title={note.title} key={note._id} id={note._id} color={note.background} date={note.date}/>)}
    </div>
  );
}

export default Noteshelf;
//result['allNotes'][0]['title']