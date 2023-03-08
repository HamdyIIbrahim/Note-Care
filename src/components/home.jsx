import React from "react";
import Noteshelf from "./noteshelf";
import Searchbar from "./searchbar";


function Home() {
 
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <Searchbar />
        <h1>Notes</h1>
          <Noteshelf />
      </div>
    </div>
  );
}

export default Home;
