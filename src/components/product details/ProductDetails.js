import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { getproductId } from '../api/Api'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {
    const[details,setDetails]=useState([])

    const {id}=useParams

    useEffect(()=>{
        const fetchdetails=()=>{
            axios.get(`https://fakestoreapi.com/products`).then((response)=>{
                console.log(response.data)
                setDetails(response.data)
            })
            
            
            
        }
        fetchdetails()
          
       
       
    },[id])
  return (
    <div className='bdy'>
        
        <div className="imagegrid">
            <img src="" alt="imag" className='image' />
        </div >
        <div className="details">
            <h1>{}</h1>
            <p>description</p>
            <p>price</p>
            <button>Buy now</button>
        </div>


      
    </div>
  )
}

export default ProductDetails
