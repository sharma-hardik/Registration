import React,{useState} from 'react'
import './App.css'
const UseStateData = (props) => {
  const [form, setForm] = useState(
    {
      username :"",
      email :"",
      password :"",
      confirm :""
    }
  )

  const handleInput = (event) =>{
  //  const name = event.target.name;
  //  const value = event.target.value;
   const {name,value} = event.target;
   setForm({ ...form,[name]: value });
  
  }
  const [records, setRecords] = useState([])

  const handlesubmit = (e) =>{
     e.preventDefault();
     const newRecord = { ...form,id : new Date().getTime().toString()}
     setRecords([...records,newRecord]);
     setForm({username:"",email:"",password:""});
  }
  return (
    <>
    <div className='container'>
    <div className='section'>
    <form action="" onSubmit={handlesubmit}>
    
      <h2>Registration</h2>
       <div className='box'>
      <label htmlFor="username">Fullname</label>
      <input type="text" name="username" id="username" placeholder='Name' className='form-control' autoComplete='off' value={form.username} onChange={handleInput} /> 
      </div>
      <div className='box'>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="Email" placeholder='Email' className='form-control' autoComplete='off' value={form.email} onChange={handleInput} /> 
      </div>
      <div className='box'>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" placeholder='Password' className='form-control' autoComplete='off' value={form.password} onChange={handleInput} />
      </div>
      <button type="submit">Registration</button>
      
      
      </form>
      </div>
      </div>
   <center>
      <table >
      <thead>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>PASSWORD</th>
        </thead>
      <tbody>
    
        {
          records.map((curEle)=>{
               return(
                <tr>
                  <td>{curEle.username}</td>
                  <td>{curEle.email}</td>
                  <td>{curEle.password}</td>
                </tr>
               )
          })
        }
      
      </tbody>
      </table>
      </center>
    </>
  )

}

export default UseStateData