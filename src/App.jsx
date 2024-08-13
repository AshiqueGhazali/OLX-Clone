import React from 'react'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details/Details'
import AddProduct from './components/AddProduct/AddProduct'

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/details' element={<Details/>}/>
    <Route path='/addProduct' element={<AddProduct/>}/>
   </Routes>
   </>
  )
}

export default App