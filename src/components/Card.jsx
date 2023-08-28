import React from 'react'

export default function Card({data}) {
  
  return (
    <div className='prompt_card'>
    <div className='flex justify-between items-start gap-5'>
      <div
        className='flex-1 justify-start items-center gap-3 cursor-pointer'
      >
        <img src={data.thumbnail} alt="...thumbnail" className='object-cover w-full h-full' />

        <div className='flex flex-col'>
          <h3 className='font-satoshi font-semibold text-gray-900'>
            {data.title}
          </h3>
          <p className='font-inter text-sm text-gray-500'>
            {data.price}
          </p>
        </div>
      </div>
     

      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{data.description}</p>
      <p className='font-inter text-sm blue_gradient cursor-pointer' >{data.language}</p>
      
    </div>
  )
}
