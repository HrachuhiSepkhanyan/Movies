import React, { useState } from "react";
import "./App.css";
import Index from "./pages/home";
import Routing from "./routing";

function App() {
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="App">
      <Index />
      <Routing filterValue={filterValue} setFilterValue={setFilterValue} />
    </div>
  );
}

export default App;
