import React from 'react'

function Card(props) {
    console.log(props);
    
  return (
    <div className='inline-block p-2 mr-10 mb-10 rounded bg-sky-200 text-black w-50 h-fit'>
      <img className='w-20 rounded-full m-auto object-cover mb-1' src={props.imgsrc} alt="" />
      <h2 className='text-2xl font-medium mb-1'>{props.name}</h2>
      <h2 className='font-medium mb-1 inline-block'>{props.surname}</h2>
      <h2 className='font-medium mb-1'>{props.age}</h2>
      <button className='p-1.5 rounded bg-amber-500 hover:bg-amber-400'>Add Friend</button>
    </div>
  )
}

export default Card;
