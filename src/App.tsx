import Alert from "./Component/Alert"
import Button from "./Component/Button/Button"
import { useState } from "react"
import ListGroup from "./Component/ListGroup"
import Like from "./Component/Button/Like/Like"
import NavBar from "./Component/NavBar"
import Cart from "./Component/Cart"

function App() {
  const [showAlert,setShowAlert]=useState(false)

  const handleSelect=(item:string)=>{
    console.log(item)

  }
  const [cartItems,setCartItems] = useState(['Product1','Product2'])


  return (
    <>
    {showAlert && <Alert onClose={()=>setShowAlert(false)}>Hello Preeti </Alert>}
   <ListGroup heading="List of cities" onselectItem={handleSelect}/>
   <Button onhandle={()=>setShowAlert(true)} color="Primary">Clicked here</Button>
   <Like onClick={()=>console.log('clicked')}/>
   <NavBar CartItemCount={cartItems.length}/>
   <Cart cartItems={cartItems} onClear={()=>setCartItems([])}/>
    
    </>
  )
}

export default App
