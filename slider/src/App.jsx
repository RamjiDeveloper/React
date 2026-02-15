// import React from "react";
// import { ChevronRight, ChevronLeft, Dot } from "lucide-react";
// import { useState } from "react";

// function App() {
//   const slide = [
//     {
//       url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8fDB8fHww",
//     },
//     {
//       url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const nextSlide = () => {
//     const isFirstSlide = currentIndex === slide.length - 1;
//     const newSlide = isFirstSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newSlide);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   }
//   return (
//     <div className="w-full max-w-[1200px] m-auto h-[780px] py-16 px-4 flex relative group">
//       <div
//         style={{ backgroundImage: `url(${slide[currentIndex].url})` }}
//         className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"
//       >
//         {/* left Arrow */}
//         <div className="hidden group-hover:block absolute top-[50%] -tarnslate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer">
//           <ChevronLeft onClick={prevSlide} size={30} />
//         </div>
//         {/* right Arrow */}
//         <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-white cursor-pointer">
//           <ChevronRight onClick={nextSlide} size={30} />
//         </div>
//       </div>
//       <div className=" absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
//         {slide.map((slides,index) => (
//           <div key={index} className="text-2xl cursor-pointer" onClick={() => goToSlide(index)}>
//             <Dot className="font-bolde size-10"/>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Dot } from "lucide-react";

function App() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200",
    },
    {
      url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200",
    },
    {
      url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLast = currentIndex === slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1200px] h-[600px] w-full m-auto relative group overflow-hidden rounded-2xl">

      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <img
              src={slide.url}
              alt="car"
              className="w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-white cursor-pointer z-10">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-white cursor-pointer z-10">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div key={index} onClick={() => setCurrentIndex(index)}>
            <Dot
              className={`cursor-pointer ${
                currentIndex === index ? "text-white" : "text-gray-400"
              }`}
              size={28}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

