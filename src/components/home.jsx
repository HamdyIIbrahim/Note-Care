import React from "react";
import Createnote from "./createnote";
import Noteshelf from "./noteshelf";
import Searchbar from "./searchbar";
import Slidebar from "./slidebar";

function Home() {
  return (
    <div className="homeContainer">
      <Slidebar />
      <div className="mainContainer">
        <Searchbar />
        <h1>Notes</h1>
        {window.location.href==="http://localhost:3000/?" || window.location.href==="http://localhost:3000/"?<Noteshelf />:<Createnote />}
      </div>
    </div>
  );
}

export default Home;
