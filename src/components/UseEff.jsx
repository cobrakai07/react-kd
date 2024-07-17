import React, { useEffect, useState } from 'react';


function UseEff() {

    const[val, setVal]=useState(false);

    let a=23;

    function function1(){
        console.log("Function called");
    }

    useEffect( function1 , [val,a] );

  return (
    <>
    <div>Komal</div>
    {
        a
    }
    <button onClick={()=>setVal(!val)}>bb</button>
    <br />
    <button onClick={()=>a=a+1}>cc</button>
    </>
  )
}

export default UseEff
