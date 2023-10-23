import React from 'react'
interface Props{
    children: string;
    onhandle:()=>void;
    color?:'primary'|'secondary'|'danger'
   
}

const Button = ({children,onhandle,color='primary'}:Props) => {
  return (
    <button type="button" className={'btn btn-'+ color} onClick={onhandle}>{children}</button>
  )
}

export default Button