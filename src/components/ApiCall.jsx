import React, { useEffect, useState } from "react";

function ApiCall() {
  const [data, setData] = useState([]);

  function calling() {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      }).catch((e)=>console.log(e));
  }

  useEffect(calling, []);

  return (
    <div>
      {data.map((el) => (
        <div>
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ApiCall;
