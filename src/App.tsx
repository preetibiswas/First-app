import Alert from "./Component/Alert"
import Button from "./Component/Button"
import { useState } from "react"

function App() {
  const [showAlert,setShowAlert]=useState(false)


  return (
    <>
    {showAlert && <Alert onClose={()=>setShowAlert(false)}>Hello Preeti </Alert>}

   <Button onhandle={()=>setShowAlert(true)} >Clicked here</Button>
    
    </>
  )
}

export default App
