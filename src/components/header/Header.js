import React from 'react'
import './Header.css'
import logo from '../header/assetes/png-transparent-retail-computer-icons-e-commerce-sales-mega-offer-miscellaneous-service-logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='head'>
      <Link to='/' style={{textDecoration:'none'}}>
      <h1 className='title'>Superkart</h1>
      
      </Link>
     
      
      <img src={logo} alt="" />
      
     
      <Link to='logout'>
      <button className='logout-btn'>Log out</button>

      </Link>
      
    </header>
    
  
      
   
        
  )
}

export default Header
