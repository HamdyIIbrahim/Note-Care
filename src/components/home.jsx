import React from "react";
import LogNav from "./logNav";
import Noteshelf from "./noteshelf";
import Searchbar from "./searchbar";


function Home() {
 
  return (
    <div className="homeContainer">
      <div className="mainContainer">
        <LogNav />
        <h1>Notes</h1>
          <Noteshelf />
      </div>
    </div>
  );
}

export default Home;
