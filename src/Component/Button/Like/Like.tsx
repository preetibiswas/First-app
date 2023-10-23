import React,{useState} from 'react'
import {FaRegHeart} from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart} from 'react-icons/ai'
interface Props {
    onClick:()=>void
}

const Like = ({onClick}:Props) => {
    const [filled,setFilled]=useState(true)
    const toggle=()=>{
        setFilled(!filled)
        onClick()
    }
    if(filled){
        return <AiFillHeart  size='40px'  onClick={toggle} color='red' />
    }
  return ( <AiOutlineHeart  size='40px'  onClick={toggle} color='red' />
  )
}

export default Like