
import { useState } from 'react'
import './navbar.css'


export default function Navbar(props) {
    const [input,setinput]= useState("")
const {handleSearch}= props


    
    

    const  handleChange=(e)=>{
        let value= e.target.value
   
     
       
        setinput(value)
   
    

    }
  
  return (
    <form onSubmit={(e)=>handleSearch(e,input)}>
    <div className='Nav'>
       
      <div className='Search'>    <input type = "textbar" placeholder='Search for Movies' onChange={handleChange}value={input} /></div>
      <div className='Btn' >  <button  onClick={(e)=>handleSearch(e,input)}>Search</button></div> 
          
      
    </div>
    </form>
  )
}
