import { ChevronDown } from "lucide-react"
import { useState } from "react";
import Card from "./Card"
import img2 from "./img2.png";


export default function Center() {
  const [isOpen, setIsOpen]=useState(false);
   const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div >
      <div className="w-[100%] h-[110px] bg-white p-4 rounded-lg">
        <div className="flex gap-3 rounded-lg">
          <div className="h-10 w-10  rounded-full">
            <img src={img2} alt="Profile" className="h-full w-full rounded-full" />
          </div>
          <div className="flex items-center bg-white rounded-3xl border border-gray-300 px-3">
            <input
              className="h-8 w-100 rounded-3xl px-3 focus:outline-none"
              type="text"
              placeholder="Start a post..."
            />
          </div>
        </div>
        <div className="flex items-center justify-between pr-8 pl-8 mt-4">
          <span className="flex text-xs items-center  hover:bg-gray-200  px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" color="green" id="video-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="788" width="24" height="24" class="_68093fa7 aa4e9d2e acf24090 _65ece05d _14832252 _9202015e" role="img" aria-label=""><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-9 12V8l6 4z"></path></svg>
            Video
          </span>
          <span className="flex text-xs items-center hover:bg-gray-200  px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" color="blue" id="image-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="213" width="24" height="24" class="_68093fa7 aa4e9d2e c482ae57 _65ece05d _14832252 _9202015e" role="img" aria-label=""><path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 13a1 1 0 0 1-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-2-7a2 2 0 1 1-2-2 2 2 0 0 1 2 2"></path></svg>
            Photo
          </span>
          <span className="flex text-xs items-center hover:bg-gray-200  px-2 py-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" color="red" id="content-align-left-medium" fill="currentColor" aria-hidden="true" data-supported-dps="24x24" viewBox="0 0 24 24" data-token-id="117" width="24" height="24" class="_68093fa7 aa4e9d2e _5199103e _65ece05d _14832252 _9202015e" role="img" aria-label=""><path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path></svg>
            Write article
          </span>
        </div>
      </div>


      <div className="mt-3.5 flex justify-center items-center gap-2 ">
        <div className="w-105 h-[2px] bg-black"></div>
        <div className="flex text-xs mb-1 ">
          <span>Sort by:</span>
          <span>Recent</span>
          
<div className="relative inline-block">
  
  {/* The trigger button */}
  <button 
    onClick={handleIsOpen} 
    className="flex items-center gap-1 focus:outline-none"
  >
  
    <ChevronDown size={20} /> 
  </button>
        
  {/* The dropdown menu */}
  {isOpen && (
    <div className="absolute right-0 mt-2 w-32 bg-yellow-100 flex flex-col items-start gap-2 p-2 rounded shadow-lg z-10">
      <h5 className="cursor-pointer hover:bg-white w-full p-1 rounded">Recent</h5>
      <h5 className="cursor-pointer hover:bg-white w-full p-1 rounded">Top</h5>
    </div>
  )}

</div>
        </div>
      </div>
      
      <Card />
      <Card />
      <Card />
      <Card />


    </div>
  )
}