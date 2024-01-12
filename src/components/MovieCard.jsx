import React from 'react'

const MovieCard = ({poster,name}) => {
  return (
    <div className='w-[150px] md:w-48 pr-4 '>
      <img className='h-[150px]  w-[120px] md:w-fit md:h-fit object-cover ' alt="" src={poster} />
      <span className=' text-md md:text-lg md:h-fit md:leading-4 text-slate-400'>
      {name}</span>
    </div>
  )
}

export default MovieCard