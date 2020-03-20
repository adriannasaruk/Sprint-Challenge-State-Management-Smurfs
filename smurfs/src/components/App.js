import React from "react";
import "./App.css";
import SmurfList from "./Smurflist";
import SmurfForm from "./SmurfForm";
import GetData from "./GetData"


const App = () => {

    return (
      <div className="App">
        <GetData />
        <SmurfList />
        <SmurfForm />
      </div>
    );
}

export default App
