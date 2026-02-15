import React from 'react'

function App() {

  const [count, setCount] = React.useState(0)
  return (
    <div className='w-full h-full flex items-center justify-center flex-col gap-4'>
      <h1 className='text-4xl font-bold'>CountDown</h1>
      <h3 className='text-2xl'>Current Count: {count}</h3>
      <button className='px-3 py-1.5 border rounded-full' onClick={() => setCount((count) => count + 1)}>Count</button>
    </div>
  )
}

export default App
