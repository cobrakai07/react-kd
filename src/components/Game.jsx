import React, { useState } from 'react'

function Game() {

    const[coin,setCoin]=useState("Coin is stable");

    function flip(){
        setCoin(()=>"Coin is flipping");
        setTimeout(()=>setCoin("Heads"),2000);
    }
  return (

    <div>
        
       <div className='bg-fuchsia-500 p-4 rounded-xl text-white'>{coin}</div>

       <button className='bg-gray-400 p-2 mt-4 rounded-xl text-white' onClick={flip}>Toss</button>

    </div>
  )
}

export default Game