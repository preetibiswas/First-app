import React, { FormEvent, useState,FieldValues } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'



const schema=z.object({
    name:z.string().min(3,{message:'Name must be atleast 3(c)'}),
    email: z.string().email(),
    age: z.number({invalid_type_error:'Age field is Required'}).min(18,{message:'Age must be atleast 18'})
})
type  FormData = z.infer<typeof schema>

const Form = () => {
    const {register,handleSubmit,formState:{errors,isValid}} =useForm<FormData>({resolver:zodResolver(schema)})
   
   
   
    // const [person,setPerson]=useState({
    //     name:'',
    //     age:''
    // })
    const onSubmit=(data:FieldValues)=>{
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
            <label htmlFor="name" className='form-label'>Name</label>
            <input 
            type="text" 
            id='name' 
            className='form-control'
            {...register('name')}/>
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
           
        </div>
        <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input 
            type="text" 
            id='email'
            className='form-control' 
            {...register('email')}/>
            {errors.email && <p className='text-danger'>{errors.email.message}</p>}
           
        </div>
        <div className='mb-3'>
            <label htmlFor="age" className='form-label'>Age</label>
            <input 
            type="number" s
            id='age'
            className='form-control'
            {...register('age',{valueAsNumber:true})}/>
             {errors.age && <p className='text-danger'>{errors.age.message}</p>}
        </div>
        <button 
        className='btn btn-success'
        disabled={!isValid}
        >Submit</button>
    </form>
  )
}

export default Form