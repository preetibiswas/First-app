import React, { FormEvent, useState,FieldValues } from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
    const {register,handleSubmit} =useForm()
   
    const [person,setPerson]=useState({
        name:'',
        age:''
    })
    const onSubmit=(data:FieldValues)=>{
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label htmlFor="name" className='form-label'>Name</label>
            <input type="text"  id='name' className='form-control' {...register('name')}/>
        </div>
        <div className='mb-3'>
            <label htmlFor="age" className='form-label'>Age</label>
            <input type="number"  id='age' className='form-control'  {...register('age')}/>
        </div>
        <button className='btn btn-success'>Submit</button>
    </form>
  )
}

export default Form