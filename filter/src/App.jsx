import React, { useState } from 'react'


function App() {

  const [categary, setCategary] = useState('all')

  const veicals = [
    { id: 1, name: "Honda City", type: "cars" },
    { id: 2, name: "Hyundai i20", type: "cars" },
    { id: 3, name: "Yamaha R15", type: "bike" },
    { id: 4, name: "Royal Enfield", type: "bike" },
    { id: 5, name: "Tata Truck", type: "cars" },
  ];

  const filteredData =
    categary === 'all'
      ? veicals
      : veicals.filter(item => item.type === categary)

  return (
    <>
      <div className='btn'>
        <button onClick={() => setCategary("all")}>All</button>
        <button onClick={() => setCategary("cars")}>Cars</button>
        <button onClick={() => setCategary("bike")}>Bike</button>
      </div>

      <div className='scroll-container'>
        <div className='scroll-content'>
          {[...filteredData, ...filteredData].map(item => (
            <p className='item' key={item.id + Math.random()}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

// {filteredData.map (item => ( <p className='item' key={item.id}>{item.name}</p> ))}
