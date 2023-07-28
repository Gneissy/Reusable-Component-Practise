import React from "react";

function Accordion({ items }) {
    const renderedItems = items.map(function(item){

        return(
            <div key = { item.id }>
                <div>
                    { item.header }
                </div>
                <div>
                    { item.content }
                </div>
            </div>
        );
    });

    
return (
  <div>
    Accordion component
    { renderedItems }
  </div>
);
  
}

export default Accordion;
