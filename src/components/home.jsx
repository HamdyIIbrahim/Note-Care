import React from "react";
import { useSelector } from "react-redux";
import LogNav from "./logNav";
import Noteshelf from "./noteshelf";
import Searchbar from "./searchbar";


function Home() {
  const selector = useSelector((state)=>state.color.auth);
  const Theme = useSelector((state)=>state.color.theme);
  return (
    <div className="homeContainer">
      <div className={`mainContainer ${(Theme=== "light")?"":"dark"}`}>
        { selector? <LogNav /> : <Searchbar /> }
        <h1>Notes</h1>
          <Noteshelf />
      </div>
    </div>
  );
}

export default Home;
