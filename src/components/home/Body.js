import React,{useEffect, useState} from 'react'
import './Body.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Body() {
  const [store,setStore]=useState([])
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`).then((response)=>{
      console.log(response.data)
      setStore(response.data)
      
    })
  },[])
  return (
    <div>
       <div className="grid">
       {store.map((stores)=>(
         <div className="imagecard" key={stores.id}>
        
          
         
             <img src={stores.image} alt="" />
        
         <div className="description">
             <h3>{stores.title}</h3>
             <p>
             ${stores.price}
             </p>
             <Link to={`product/${stores.id}`}>
             <button className='btn'>Purchase</button>
             
             </Link>
       
         
     
     </div>
     </div>
            
            ))
       }
            

  
       
       </div>
      
    </div>
  )
}

export default Body
