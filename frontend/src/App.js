import React from "react";
import Button from "./components/Button";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {

  const items = [
    {
      id: "a97as8dw",
      header: "How to master Javascript",
      content: "Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. "
    },
    {
      id: "890awu4oajw4",
      header: "How to master React",
      content: "Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. "
    },
    {
      id: "apş2il4hjk2asln4",
      header: "How to master CSS",
      content: "Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. Like this. "
    }
  ]

return (
  <div>
    {/* {<Accordion items={items} />} */}
    <ButtonPage />
  </div>
);
  
}

export default App;
