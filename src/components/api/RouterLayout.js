import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../header/Header'

import Body from '../home/Body'
import Logout from '../logout/Logout'
import ProductDetails from '../product details/ProductDetails'

function RouterLayout() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
          
        <Route path='/' element={<Body/>}/>
        <Route path='superkart' element={<Body/>}/>
          <Route path='logout' element={<Logout/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>

        </Routes>
       
    </Router>
    </>

  )
}

export default RouterLayout
