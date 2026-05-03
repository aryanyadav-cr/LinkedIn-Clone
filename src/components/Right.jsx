const newsData = [
    {
        title: "India’s top employers for long-term careers",
        time: "12h ago",
        readers: "9,375 readers",
    },
    {
        title: "Top finance experts to follow",
        time: "6h ago",
        readers: "7,923 readers",
    },
    {
        title: "Top tech & startup experts to follow",
        time: "6h ago",
        readers: "3,981 readers",
    },
    {
        title: "Oil hits 4-year high on fears of further ...",
        time: "38m ago",
        readers: "2,765 readers",
    },
    {
        title: "Pay gap widens for fresh grads",
        time: "12h ago",
        readers: "1,294 readers",
    },
];

import { ChevronRight } from "lucide-react";
import Footer from "./Footer";

const puzzles = [
    {
        title: "Patches #44",
        subtitle: "Piece it together",
        color: "bg-blue-100",
    },
    {
        title: "Zip #409",
        subtitle: "Complete the path",
        color: "bg-orange-100",
    },
    {
        title: "Mini Sudoku #262",
        subtitle: "The classic game, made mini",
        color: "bg-green-100",
    },
    {
        title: "Tango #570",
        subtitle: "Harmonize the grid",
        color: "bg-gray-100",
    },
];


export default function Right() {
    return (
        <>
     <div className="w-[23%] h-full">
        <div className="w-[100%] h-full bg-white p-4 gap-4 grid rounded-lg" >
            <div className="flex justify-between items-center ">
                <h2>Linkedin news</h2>
                <span class="dd884517 d9a6b2b9 fd5063f9 eeb00d88 _64fabef6 _8b0b0c22 _182547b5 _883b96c8 c6aa2f45 d6803a9f _29562cca _25d1fd9e e02813de _98fb8a9a b1bae10a _58227134 _9e347617 _69d43d94 _3e2a2a4a _3834818e fca776a4"><svg xmlns="http://www.w3.org/2000/svg" id="signal-notice-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="53" width="16" height="16" class="_68093fa7 aa4e9d2e _0729c4b2 _116498d6 _9b4099fe _55308c19" role="img" aria-label=""><path d="M12 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-3 8v2H7.5A1.5 1.5 0 0 1 6 10.5a1.6 1.6 0 0 1 .1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1 1 10.25 5 1.25 1.25 0 0 1 9 6.25"></path></svg></span>
            </div>
            <div >
                {/* Subheading */}
                <p className="text-sm text-gray-500 ">Top stories</p>

                {/* News List */}
                <div className="space-y-3">
                    {newsData.map((item, index) => (
                        <div key={index} className="cursor-pointer hover:bg-gray-100 rounded-md">
                            <p className="text-sm font-medium text-gray-800 leading-snug">
                                {item.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                {item.time} • {item.readers}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-3 text-sm text-gray-600 font-medium cursor-pointer hover:text-gray-800 flex items-center gap-1">
                    Show more news
                    <span>▼</span>
                </div>
            </div>
            <div className="">

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                    Today’s puzzles
                </h2>

                {/* Puzzle List */}
                <div className="space-y-3">
                    {puzzles.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
                        >
                            {/* Left Section */}
                            <div className="flex items-center gap-3">

                                {/* Icon Box */}
                                <div className={`w-10 h-10 rounded-md ${item.color} flex items-center justify-center`}>
                                    <span className="text-sm font-bold text-gray-600">#</span>
                                </div>

                                {/* Text */}
                                <div>
                                    <p className="text-sm font-medium text-gray-800">
                                        {item.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Arrow */}
                            <ChevronRight size={18} className="text-gray-500" />
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-3 sticky top-0 text-sm text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-1">
                    Show more
                    <span>▼</span>
                </div>
            </div>
            
        </div>
      
         <Footer />
       
 </div></>

    )
}