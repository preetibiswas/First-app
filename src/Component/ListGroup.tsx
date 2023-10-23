import {useState }from "react";


interface Props{
  itemss:string[];
  heading:string;
  onselectItem:(item:string)=>void;
}

export default function ListGroup({itemss,heading,onselectItem}:Props) {
    const items=['nepal','India','israel','us','egypt']
    const [selected,setSelected] = useState(-1)
   
    
  return (
    <div>
        {itemss.length === 0 && <p>No list found</p>}
        <h1>{heading}</h1>
      <ul className="list-group">
        {itemss.map((item,index)=>(
              <li className={ selected===index ? 'list-group-item active':'list-group-item'}
              onClick={()=>{setSelected(index);
              onselectItem(item)}
              
              }>{item}</li>
        ))}
  
</ul>



    </div>
  )
}
