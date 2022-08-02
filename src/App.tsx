import React, { useState } from "react";
import "./App.css";
import Index from "./pages/home";
import Routing from "./routing";
import Form from "./components/main/moviesContainer/searchForm/Form";

function App() {
  const [filterValue, setFilterValue] = useState("");

  return (
    <div className="App">
      <Index />
      <Form setFilterValue={setFilterValue} />
      <Routing filterValue={filterValue} />
    </div>
  );
}

export default App;
