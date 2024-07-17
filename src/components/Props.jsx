// import React from "react";

// const Props = (props) => {
//   // console.log(props);
//   return (
//     <div>
//       <div>{props.name}</div>
//       <div>{props.age}</div>
//       <div>{props.hot ? "Hot hai" : "nhi hai"}</div>
//     </div>
//   );
// };

// export default Props;

import React from "react";
import Demo from "./Demo"

function Props({ name, age, hot }) {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{hot ? "Hot hai" : "nhi hai"}</div>
      <Demo name={name}/>
    </div>
  );
}

export default Props;
