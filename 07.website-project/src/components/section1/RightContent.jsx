import React from 'react'
import RightCard from './RightCard'

function RightContent(props) {
  return (
    <div id='right' className='h-full overflow-x-auto rounded-4xl flex flex-nowrap gap-7 p-6 w-2/3'>
      
      {props.users.map(function(elem, idx) {
        return <RightCard key={idx} id={idx} num={elem.num} img={elem.img} tag={elem.tag}/>
      })}

    </div>
  )
}

export default RightContent
