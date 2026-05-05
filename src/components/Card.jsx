import img2 from "./img2.png";
import { ThumbsUp } from "lucide-react"
import { MessageSquare } from "lucide-react"
import { Share2 } from "lucide-react"
import { useEffect, useState } from "react";
import img4 from "./img4.png"
export default function Card() {

const [islike , setIsLike]=useState(false);
const [Count , setCount]=useState(0);

const handleLike = () => {
    if (islike) {
      setCount(Count - 1);
    } else {
      setCount(Count + 1);
    }
    setIsLike(!islike);
  };
// 
const [random , setrandom] = useState(0);

useEffect(() => {
    const randomMin = Math.floor(Math.random() * 60);
   setrandom(randomMin);
  }, []);

     return(
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-4 mt-4">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex gap-3">
            <img
              src={img2}
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-sm">
                Aryan Yadav <span className="text-blue-500"></span>
              </h3>
              <p className="text-xs text-gray-500">
               BCA 
              </p>
              <p className="text-xs text-gray-400">{random}m </p>
            </div>
          </div>

          <div className="text-gray-500 cursor-pointer text-lg">⋯</div>
        </div>

        {/* Content */}
        <div className="mt-3 text-sm text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          
          <span className="text-gray-500 cursor-pointer ml-1">...more</span>
        </div>

        {/* Image */}
        <div className="mt-3">
          <img
            src={img4}
            alt="post"
            className="w-full rounded-lg border"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-6 mt-4 text-gray-600 text-sm border-t pt-2">
          <button onClick={handleLike} className="hover:text-blue-500 flex items-center">
            <ThumbsUp onClick={() => setIsLike(!islike)}
              className={islike ? "text-blue-500" : "text-black"}
            /> <p >{Count}</p></button>
          <button className="hover:text-blue-500"><MessageSquare /></button>
          <button className="hover:text-blue-500"><Share2 /> </button>
        </div>
      </div>

     )
}
