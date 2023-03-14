import React from "react";
import { useSelector } from "react-redux";
import LogNav from "./logNav";
import Noteshelf from "./noteshelf";
import Searchbar from "./searchbar";


function Home() {
  const selector = useSelector((state)=>state.color.auth);
  const Theme = useSelector((state)=>state.color.theme);
  return (
    <div className={`appContainer ${(Theme=== false)?"":"dark"}`}>
      <div className={`homeMainContainer ${(Theme=== false)?"":"dark"}`}>
        { selector? <LogNav /> : <Searchbar /> }
        <h1 className={`headnote ${(Theme=== false)?"":"dark"}`}>Notes</h1>
          <Noteshelf />
      </div>
    </div>
  );
}

export default Home;
