import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
  return (
    <>
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-50'>
      <Image 
      src={author.photo.url} 
      unoptimized
      alt={author.name}
      height="100px"
      width="100px" 
      className='rounded-full'
      />
     
    <h3 className="text-white my-4 ">A blog by ✨<span className='text-white my-4 text-4xl font-bold'> {author.name}</span></h3>
    <p className="text-white text-lg">{author.bio}</p>
    </div>
    </>
  )
}

export default Author   