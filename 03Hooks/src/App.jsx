import { useState } from 'react'


function App() {
  let [count, setCount] = useState(0)
  function add(){
    setCount(count+1)
  }
  function minus(){
    setCount(count-1)
  }
  return ( 
      <>
      <h1>Effect of Usestate</h1>
      <h3>Counter : {count}</h3>
      <button onClick={add}>Increase Count : {count}</button>
      <button onClick={minus}>Increase Count : {count}</button>
      <footer>Counter: {count}</footer>
      </>
  )
}


export default App
