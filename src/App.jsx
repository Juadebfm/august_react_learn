import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
// Components Import 
import Navbar from "./components/Header"
import Footer from "./components/Footer"
// Page Imports
import HomePage from "./pages/HomePage"
import SignupPage from "./pages/SignupPage"
import LoginPage from "./pages/LoginPage"
import CategoryPage from "./pages/CategoryPage"
import CourseDetailsPage from "./pages/CourseDetailsPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"

const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden font-inter text-base'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/> }/>
          {/* // Auth Pages */}
          <Route path='/signup' element={<SignupPage/> }/>
          <Route path='/login' element={<LoginPage/> }/>

          {/* Auth User's Page */}
          <Route path='/category-page' element={<CategoryPage/>}/>
          <Route path='/course-details' element={<CourseDetailsPage/>}/>
          <Route path='/shopping-cart' element={<ShoppingCartPage/>}/>
          <Route path='/mentors-page' element={<ShoppingCartPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App