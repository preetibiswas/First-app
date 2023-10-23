import {useState }from "react";
import styles from './ListGroup.module.css'
import styled from "styled-components";


interface Props{
 
  heading:string;
  onselectItem:(item:string)=>void;
}

export default function ListGroup({heading,onselectItem}:Props) {
    const items=['nepal','India','israel','us','egypt']
    const [selected,setSelected] = useState(-1)
   
    
  return (
    <div>
        {items.length === 0 && <p>No list found</p>}
        <h1>{heading}</h1>
      <ul className={[styles.container,styles.listGroup].join(' ')}>
        {items.map((item,index)=>(
              <li className={ selected===index ? 'list-group-item active':'list-group-item'}
              onClick={()=>{setSelected(index);
              onselectItem(item)}
              
              }>{item}</li>
        ))}
  
</ul>



    </div>
  )
}

