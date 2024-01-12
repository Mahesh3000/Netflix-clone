import React from 'react'

const MovieCard = ({poster,name}) => {
  return (
    <div className='w-48 pr-4'>
      <img className=' ' alt="" src={poster}/>
      <span className='text-whi te text-lg text-wrap leading-4 text-slate-400'>
      {name}</span>
    </div>
  )
}

export default MovieCard