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






// map


// function App() {
//   const images = [
//     "https://picsum.photos/200?1",
//     "https://picsum.photos/200?2",
//     "https://picsum.photos/200?3"
//   ];

//   return (
//     <div>
//       <h2>Image Gallery</h2>
//       {images.map((img, index) => (
//         <img key={index} src={img} alt="random" width="150" />
//       ))}
//     </div>
//   );
// }

// export default App;


// function App() {
//   const fruits = ["Apple", "Banana", "Mango"];

//   return (
//     <div>
//       <h2>Fruit List</h2>
//       <ul>
//         {fruits.map((fruit, index) => (
//           <li key={index}>{fruit}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//filter

// function App() {
//   const products = [
//     { id: 1, name: "Shoes", img: "https://picsum.photos/200?1" },
//     { id: 2, name: "Watch", img: "https://picsum.photos/200?2" }
//   ];

//   return (
//     <div>
//       {products.map(product => (
//         <div key={product.id}>
//           <h3>{product.name}</h3>
//           <img src={product.img} alt={product.name} width="150" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// function App() {
//   const numbers = [10, 25, 30, 5, 50];

//   const greaterThan20 = numbers.filter(num => num > 20);

//   return (
//     <div>
//       <h2>Numbers Greater Than 20</h2>
//       {greaterThan20.map((num, index) => (
//         <p key={index}>{num}</p>
//       ))}
//     </div>
//   );
// }

// export default App;

// useState push and pop
// import React, { useState } from "react";

// function App() {
//   const [items, setItems] = useState(["Pen", "Book"]);

//   const addItem = () => {
//     setItems([...items, "Pencil"]); // push ka React way
//   };

//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>

//       {items.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );
// }

// export default App;

// find

// function App() {
//   const users = [
//     { id: 1, name: "Rahul" },
//     { id: 2, name: "Aman" }
//   ];

//   const user = users.find(u => u.id === 2);

//   return (
//     <div>
//       <h2>Found User:</h2>
//       <p>{user.name}</p>
//     </div>
//   );
// }

// export default App;

// reduce

// function App() {
//   const prices = [100, 200, 300];

//   const total = prices.reduce((acc, curr) => acc + curr, 0);

//   return (
//     <div>
//       <h2>Total Price: {total}</h2>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";

// function App() {
//   const [gallery, setGallery] = useState([
//     { id: 1, img: "https://picsum.photos/200?1" }
//   ]);

//   const addImage = () => {
//     const newImage = {
//       id: gallery.length + 1,
//       img: `https://picsum.photos/200?${gallery.length + 1}`
//     };

//     setGallery([...gallery, newImage]);
//   };

//   return (
//     <div>
//       <button onClick={addImage}>Add Image</button>

//       {gallery.map(item => (
//         <img key={item.id} src={item.img} width="120" alt="gallery" />
//       ))}
//     </div>
//   );
// }

// export default App;


// search

// import React, { useState } from "react";

// function App() {
//   const [search, setSearch] = useState("");

//   const movies = [
//     { id: 1, title: "Pathaan" },
//     { id: 2, title: "Jawan" },
//     { id: 3, title: "Animal" },
//     { id: 4, title: "Dangal" }
//   ];

//   // Search Logic
//   const filteredMovies = movies.filter(movie =>
//     movie.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>Movie Search</h2>

//       <input
//         type="text"
//         placeholder="Search movie..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <ul>
//         {filteredMovies.map(movie => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// const movies = [
//   {
//     id: 1,
//     title: "Pathaan",
//     image: "https://picsum.photos/200?1"
//   },
//   {
//     id: 2,
//     title: "Jawan",
//     image: "https://picsum.photos/200?2"
//   }
// ];

// {filteredMovies.map(movie => (
//   <div key={movie.id}>
//     <h3>{movie.title}</h3>
//     <img src={movie.image} width="120" alt={movie.title} />
//   </div>
// ))}

