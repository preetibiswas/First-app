import Alert from "./Component/Alert"
import Button from "./Component/Button"

function App() {


  return (
    <>
   <Alert>hello world<span>preeti</span></Alert>
   <Button onhandle={()=>console.log('clicked')} >Clicked here</Button>
    
    </>
  )
}

export default App
