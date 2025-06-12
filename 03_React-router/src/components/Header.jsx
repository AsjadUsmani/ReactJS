import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='flex items-center justify-between bg-yellow-200 text-black px-5 py-5'>
      <h2 className='text-2xl '>Asjad</h2>
      <div className='flex gap-5'>
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}

export default Header
