import axios from 'axios';
import React, { useState } from 'react'
import react from 'react';
//import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const[name,setName]=useState();
  const [email,setEmail]=useState()
  const[address,setAddress]=useState()
  //const navigator = useNavigate

  const submit=(e)=>{
    e.preventDefault();
    axios.post('https://task-7-cyiz.onrender.com/api/user/create',{name,email,address})
    .then(result=>{
      console.log(result.data) 
      navigator('/')
    })
    .catch(err=>{console.log(err)})

  }
  return (
    <div>
      <h1>create</h1>
      <form onSubmit={submit}>
        <div>
          <label>Name</label>
          <input type="text" onChange={(e)=>setName(e.target.value)}/><br/>
          <label>Email</label>
          <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Address</label>
          <input type="text" onChange={(e)=>setAddress(e.target.value)}/><br/>
          <label>submit</label>
          <button>Submit</button>
          
        </div>
      </form>
    </div>
  )
}

export default CreateUser;