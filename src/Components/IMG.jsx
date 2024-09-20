import React from 'react'

export default function IMG({src,alt}) {
  return (
    <div className='aspect-square md:w-1/4 p-2 md:p-4 flex justify-center'>
      <img className='rounded-xl lg:hover:scale-150 transition-transform duration-300 object-cover h-[100%]' src={src} alt={alt} />
    </div>
  )
}
