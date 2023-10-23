import Alert from "./Component/Alert"
import Button from "./Component/Button"
import { useState } from "react"
import ListGroup from "./Component/ListGroup"

function App() {
  const [showAlert,setShowAlert]=useState(false)
  const handleSelect=(item:string)=>{
    console.log(item)

  }


  return (
    <>
    {showAlert && <Alert onClose={()=>setShowAlert(false)}>Hello Preeti </Alert>}
   <ListGroup heading="List of cities" onselectItem={handleSelect}/>
   <Button onhandle={()=>setShowAlert(true)} >Clicked here</Button>
    
    </>
  )
}

export default App
