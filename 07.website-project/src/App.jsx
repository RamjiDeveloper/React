import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

function App() {

  const users = [
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro: "",
      tag: "Satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro: "",
      tag: "UnderServed"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro: "",
      tag: "UnderBanked"
    },
    {
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "UnderBanked"
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "UnderBanked"
    },
  ]
  return (
    <div>
     <Section1 users={users}/>
     <Section2 />
    </div>
  )
}

export default App
