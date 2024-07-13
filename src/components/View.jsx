import React, { useState } from "react";

function View() {
  const [view, setView] = useState(false);
  console.log("Print");
  function fun() {
    setView(!view);
  }
  return (
    <div>
      <>
      
        {view && (
          <div className="bg-blue-300">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              natus.
            </p>
          </div>
        )}

        {!view && (
          <div className="bg-red-300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              consequatur.
            </p>
            <p>Lorem, ipsum dolor.</p>
            <p>jbsfjkbc waje fwwuibf</p>
          </div>
        )}

        <button className="bg-blue-400 m-2 p-3" onClick={fun}>
          View
        </button>
      </>
    </div>
  );
}

export default View;
