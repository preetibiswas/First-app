import Alert from "./Component/Alert"
import Button from "./Component/Button/Button"
import { useState } from "react"
import ListGroup from "./Component/ListGroup"
import Like from "./Component/Button/Like/Like"

function App() {
  const [showAlert,setShowAlert]=useState(false)
  const [fillHeart,setFillHeart]=useState(false)
  const handleSelect=(item:string)=>{
    console.log(item)

  }


  return (
    <>
    {showAlert && <Alert onClose={()=>setShowAlert(false)}>Hello Preeti </Alert>}
   <ListGroup heading="List of cities" onselectItem={handleSelect}/>
   <Button onhandle={()=>setShowAlert(true)} color="Primary">Clicked here</Button>
   <Like onClick={()=>console.log('clicked')}/>
    
    </>
  )
}

export default App
