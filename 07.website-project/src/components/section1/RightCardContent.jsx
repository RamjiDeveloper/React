import React from 'react'
import { ArrowRight } from 'lucide-react';

function RightCardContent(props) {
  return (
    <>
      <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between'>
        <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center text-xl font-semi-bold'>{props.id + 1}</h2>
        <div>
            <p className='text-medium text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam placeat perferendis, aliquam error quae doloremque.</p>
            <div className='flex items-center justify-between'>
                <button className='bg-blue-600 text-white px-7 py-2 font-medium  rounded-full'>{props.tag}</button>
                <button className='bg-blue-600 text-white px-4 py-2 font-medium rounded-full'><ArrowRight /></button>
            </div>
        </div>
      </div> 
    </>
  )
}

export default RightCardContent
