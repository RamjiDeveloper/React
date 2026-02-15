import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Conent(props) {
  return (
    <div className='pb-16 pt-6 flex gap-10 items-center  h-[90vh] px-18'>
       <LeftContent />
       <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Conent
