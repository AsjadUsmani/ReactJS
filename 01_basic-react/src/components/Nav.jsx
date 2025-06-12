import React from 'react'

function Nav(props) {
  return (
    <div>
      <nav className='flex justify-between items-center px-6 py-8 bg-amber-500'>
        <h2 className='text-2xl'>{props.user}</h2>
        <div id="right" className='flex gap-8'>
          <h4 className='text-xl'>Home</h4>
          <h4 className='text-xl'>Contact Us</h4>
          <h4 className='text-xl'>About</h4>
          <h4 className='text-xl'>Support</h4>
        </div>
      </nav>
    </div>
  )
}

export default Nav
