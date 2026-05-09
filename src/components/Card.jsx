import img2 from "./img2.png";
import { ThumbsUp } from "lucide-react"
import { MessageSquare } from "lucide-react"
import { Share2 } from "lucide-react"
import { useEffect, useState } from "react";
import img4 from "./img4.png"
export default function Card() {

  const [islike, setIsLike] = useState(false);
  const [Count, setCount] = useState(0);

  const handleLike = () => {
    if (islike) {
      setCount(Count - 1);
    } else {
      setCount(Count + 1);
    }
    setIsLike(!islike);
  };
  // 
  const [random, setrandom] = useState(0);

  useEffect(() => {
    const randomMin = Math.floor(Math.random() * 60);
    setrandom(randomMin);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(prev => !prev);
  };
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleComment = () => {
    if (comment.trim() === "") return;

    setComments([...comments, comment]);
    setComment("");
  };
  return (
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
            className={islike ? "text-black" : "text-grey-500"}
          /><p >{Count}</p></button>
        <button
          onClick={handleIsOpen}
          className="flex items-center gap-1 hover:text-blue-500"
        >
          <MessageSquare onClick={() => setIsLike(!islike)}
            className={islike ? "text-black" : "text-grey-500"} />
          <span >({comments.length})</span>
        </button>



        <button className="hover:text-blue-500"><Share2 /> </button>

      </div>

      {isOpen && (
        <div className="mt-4 border-t pt-3">

          {/* Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />

            <button
              onClick={handleComment}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Sent
            </button>
          </div>

          {/* Comments List */}
          <div className="mt-4 flex flex-col gap-3">
            {comments.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded-lg text-sm"
              >
                <p className="font-semibold"></p>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

  )
}
