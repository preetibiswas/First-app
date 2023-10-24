import Alert from "./Component/Alert"
import Button from "./Component/Button/Button"
import { useState } from "react"
import ListGroup from "./Component/ListGroup"
import Like from "./Component/Button/Like/Like"
import NavBar from "./Component/NavBar"
import Cart from "./Component/Cart"
import Form from "./Component/Form"

function App() {
  const [showAlert,setShowAlert]=useState(false)

  const handleSelect=(item:string)=>{
    console.log(item)

  }
  const [cartItems,setCartItems] = useState(['Product1','Product2'])
  const [game,setGame]=useState({
    id:1,
    player:{
      name:'jhone',
      age:20
    }
  })
  const [pizza,setPizza]=useState({
    name:'spicy Pepperoni',
    toppings:['Mashroom','berry']
  })
  const handleChange=()=>{
    setGame({...game,player:{...game.player,name:'Boby'}})
    console.log('je')
  }
  const onHandleToppings=()=>{
    setPizza({...pizza,toppings:[...pizza.toppings,'cherry','onion']})
  }


  return (
    <>
    {showAlert && <Alert onClose={()=>setShowAlert(false)}>Hello Preeti </Alert>}
   <ListGroup heading="List of cities" onselectItem={handleSelect}/>
   <Button onhandle={()=>setShowAlert(true)} color="Primary">Clicked here</Button>
   <Like onClick={()=>console.log('clicked')}/>
   <NavBar CartItemCount={cartItems.length}/>
   <Cart cartItems={cartItems} onClear={()=>setCartItems([])}/>
   <button onClick={()=>handleChange()}>Change player Name</button>
   <h3>{game.id} {game.player.name}</h3>
     <div>
      <p>Pizza : {pizza.name}</p>
      <p>Toppings: {pizza.toppings.map((itm)=><li>{itm}</li>)}</p>
      <button onClick={()=>onHandleToppings()}>add Toppoing</button>
     </div>
     <Form/>
    </>
  )
}

export default App
