import React from 'react'
import {Route, Routes, Link} from 'react-router'


const Navbar = () => {
  return (<header> 
     <div>
                        
      <div className="navbar bg-base-100 mu-10">
        <div className="navbar-start">
          <div className=" dropdown ">
    
    </div>
    <img src="/images/logo.png" alt="logo" className=" h-16 w-auto object-contain " />
  </div>
  <div className="navbar-center hidden lg:flex">
   <Link to="/" className="btn btn-ghost rounded-btn">Home</Link>
   <Link to="/create" className="btn btn-ghost rounded-btn">About Us</Link>
   
  </div>
  <div className="navbar-end mr-5">
    
    <Link to="/login" className="btn bg-violet-700 border-white text-gray-50 ">Log in</Link>
  </div>
</div>
    </div> </header>
   
  )
}

export default Navbar