import React from 'react'

export default function IMG({src,alt}) {
  return (
    <div className='aspect-square w-1/4 p-4'>
      <img className='rounded-xl hover:scale-150 transition-transform duration-300 object-cover h-[100%]' src={src} alt={alt} />
    </div>
  )
}
