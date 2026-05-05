


import img2 from "./img2.png";
import img3 from "./img3.png"
export default function Left() {
    return (
        <div className="w-55 h-[445px] grid items-start gap-5 ">
            <div className="grid w-55 h-62 items-start bg-white rounded-lg">
                <div className="h-15 w-55 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={img3}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-25 left-30 rounded-full h-25 w-25  overflow-hidden">
                    <img
                        src={img2}
                        alt="Profile"
                        className="w-full h-full object-cover bg-white"
                    />
                </div>
                <div className="relative  p-3 top-10"> <h2 >Name</h2></div>
                <div className="relative   p-3 text-xs  top-0.5"><h5>Lorem ipsum dolor sit amet consectetur...,!</h5>
                    <span className="relative   text-xs top-2">Haridwar , UTTARAKHAND</span></div>

            </div>

            <div className="w-55 h-20 bg-white rounded-lg grid items-center justify-center p-3">
                <span className=" text-xs">See how Premium helps you achieve your goals</span>
                <div className="flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="w-6 h-6"
                    >
                        <path
                            fill="#e7a33e"
                            d="M20.01 20.01c.63-.63.99-1.48.99-2.38V6.38C21 4.51 19.49 3 17.62 3H6.38c-.9 0-1.75.36-2.38.99l16.02 16.02z"
                        />
                        <path
                            fill="#c37d16"
                            d="M3.99 3.99C3.36 4.62 3 5.48 3 6.38v11.25c0 1.87 1.51 3.38 3.38 3.38h11.25c.9 0 1.75-.36 2.38-.99z"
                        />
                    </svg>
                    <span className="text-xs ml-2">Act now:1month of free premium</span>
                </div>
            </div>

            <div className="w-55 h-20 bg-white rounded-lg grid items-center p-2">
                <span className="text-xs ml-2">Profile viewers      56 </span>
                <span className="text-xs ml-2">Post impressions     6 </span>
            </div>



            <div className="w-55 h-25 bg-white rounded-lg grid items-center p-2 gap-2">
                <div className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="bookmark-fill-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="190" width="16" height="16" class="_68093fa7 e7f7c2c3 aa4e9d2e _9b4099fe _0729c4b2 _9202015e" role="img" aria-label=""><path d="M13 4a3 3 0 0 0-3-3H3v14l5-4.5 5 4.5z"></path></svg>
                    <span className="text-xs">Saved items </span>
                </div>
                <div className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="group-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="201" width="16" height="16" class="_68093fa7 e7f7c2c3 aa4e9d2e _9b4099fe _0729c4b2 _9202015e" role="img" aria-label=""><path d="M8.5 7h-1A1.5 1.5 0 0 0 6 8.5V14h4V8.5A1.5 1.5 0 0 0 8.5 7m4.25 1h-.5A1.25 1.25 0 0 0 11 9.25V14h3V9.25A1.25 1.25 0 0 0 12.75 8"></path><circle cx="8" cy="4" r="2"></circle><circle cx="12.5" cy="5.5" r="1.5"></circle><path d="M3.75 8h-.5A1.25 1.25 0 0 0 2 9.25V14h3V9.25A1.25 1.25 0 0 0 3.75 8"></path><circle cx="3.5" cy="5.5" r="1.5"></circle></svg>
                    <span className="text-xs">Groups</span>
                </div>

                <div className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="newspaper-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="340" width="16" height="16" class="_68093fa7 e7f7c2c3 aa4e9d2e _9b4099fe _0729c4b2 _9202015e" role="img" aria-label=""><path d="M13 4v8H3V4zm2-2H1v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2zm-3 3H4v2h8zM7 8H4v3h3zm5 0H8v1h4zm0 2H8v1h4z"></path></svg>
                    <span className="text-xs">Newsletters</span>
                </div>

                <div className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" id="calendar-small" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" data-token-id="193" width="16" height="16" class="_68093fa7 e7f7c2c3 aa4e9d2e _9b4099fe _0729c4b2 _9202015e" role="img" aria-label=""><path d="M2 2v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V2zm8.5 1.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1m-5 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1M12 11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h8z"></path></svg>
                    <span className="text-xs">Events</span>
                </div>

            </div>


        </div>
    )
}
