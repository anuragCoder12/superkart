import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className='foot'>
        &copy; Superkart {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
