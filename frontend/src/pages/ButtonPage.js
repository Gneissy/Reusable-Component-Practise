import React from "react";
import Button from "../components/Button";

function ButtonPage() {

    const handleClick = function(){
      console.log("Clicked");
    }
  
  
    return (
      <div>
        <div>
          <Button onClick={handleClick} primary rounded> Click here </Button>
        </div>
        <div>
          <Button secondary> Lets go </Button>
        </div>
        <div>
          <Button success outline> Run </Button>
        </div>
        <div>
          <Button warning> Hoşt </Button>
        </div>
        <div>
          <Button danger> Zınk </Button>
        </div>
      </div>
    );
  }
  
  export default ButtonPage;
  