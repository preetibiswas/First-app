import React from 'react'
import styles from './Button.module.css'

interface Props{
    children: string;
    onhandle:()=>void;
    color?:'Primary'|'secondary'|'danger'
   
}

const Button = ({children,onhandle,color}:Props) => {
  return (
    <button type="button" className={[styles.btn,styles['btn'+ color]].join(' ')} onClick={onhandle}>{children}</button>
  )
}

export default Button