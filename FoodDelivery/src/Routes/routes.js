import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homescreen from '../screens/Homescreen'
import Cart from '../screens/Cart'
//import Category from '../components/category'
import Pizza from '../components/pizza'
function Routess(){
    return (
        <Routes>
            <Route path='/' element={<Homescreen/>}/>
            <Route path='/cart' element={<Cart/>}/>           
            <Route path='/pizza/:name/:id' element={<Pizza/>}/> 
        </Routes>
       



    )
}

export default Routess