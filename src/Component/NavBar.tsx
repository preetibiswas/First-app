import React from 'react'
interface Props{
    CartItemCount:number;
}

const NavBar = ({CartItemCount}:Props) => {
  return (
    <div>NavBar :{CartItemCount}</div>
  )
}

export default NavBar