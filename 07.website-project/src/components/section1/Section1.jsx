import React from 'react'
import Navbar from './Navbar'
import Page1Conent from './Page1Conent'

function Section1(props) {

  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Conent users={props.users} />
    </div>
  )
}

export default Section1
