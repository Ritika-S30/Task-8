import axios from 'axios';
import React ,{useState}from 'react';

import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const id=useParams()
  const[name,setName]=useState();
  const [email,setEmail]=useState();
  const[address,setAddress]=useState();
  const navigator = useNavigate();

  const updateuser =(e)=>{
    e.preventDefault();
    axios.put(`https://task-7-cyiz.onrender.com/api/user/update${id}`,{name,email,address})
    .then(result=>{
    

      navigator('/');
      //console.log('result')


   })
    .catch(err=>{console.log(err)})
  }
  return (
    <div>
          <h1>Update</h1>
      <form>
        <div>
          <label>Name : </label>
          <input type="text"value={name} onChange={(e)=>setName(e.target.value)}/><br/>
          <label>Email : </label>
          <input type="text" value={email}onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Address : </label>
          <input type="text"value={address}onChange={(e)=>setAddress(e.target.value)}/><br/>
          <label>submit </label>
          <button>submit</button>
          
        </div>
      </form>
    </div>
  )
}

export default UpdateUser