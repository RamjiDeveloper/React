import React, { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
      //counter = counter + 1
    setCounter(counter + 1)
    // console.log('Button Clicked', counter);
    }else{
      console.log('You have limited number can not write another number');
      
    }
  }
  const removeValue = () =>{
    if(counter > -1){
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
     <h1>Chai our React</h1>  
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add value {counter
}</button>
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
