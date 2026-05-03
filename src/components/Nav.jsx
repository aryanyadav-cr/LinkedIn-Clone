import { FaBell } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { House } from 'lucide-react';
import { UserRoundPen } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isNetwork = location.pathname === "/network";
    const isNotifications = location.pathname === "/notifications";
    const isJobs = location.pathname === "/jobs";
    const isMessages = location.pathname === "/messages";

    return (
        <>
            <nav className="h-13 flex gap-4 items-center justify-center bg-white fixed top-0 left-0 right-0 z-10 border-b-2 ">
                <div className="flex items-center gap-4 pr-10 mr-30 ">
                    <FaLinkedin size={35}
                        color="#0A66C2" />

                    <div className="flex items-center bg-white rounded-3xl px-3">
                        <input
                            className="h-8 w-64 outline-none border border-black rounded-3xl px-3"
                            type="text"
                            placeholder="Search..."
                        />
                    </div></div>
                <div className="flex items-center gap-8">

                    <Link to="/" className="flex flex-col items-center">
                        <House
                            size={24}
                            className={isHome ? "text-gray-400" : "text-black"}
                        />
                        <span className={isHome ? "text-gray-400 text-xs border-b-4 border-gray-400" : "text-black text-xs"}>
                            Home
                        </span>
                    </Link>
                    <Link to="/network" className="flex flex-col items-center">
                        {/* SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            className={isNetwork ? "text-gray-400  " : "text-black"}
                        >
                            <path d="M12 16v6H3v-6a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3m5.5-3A3.5 3.5 0 1 0 14 9.5a3.5 3.5 0 0 0 3.5 3.5m1 2h-2a2.5 2.5 0 0 0-2.5 2.5V22h7v-4.5a2.5 2.5 0 0 0-2.5-2.5M7.5 2A4.5 4.5 0 1 0 12 6.5 4.49 4.49 0 0 0 7.5 2"></path>
                        </svg>

                        <span className={isNetwork ? "text-gray-400 text-xs border-b-4 border-gray-400  " : "text-black text-xs"}>My Network</span>
                    </Link>
                    <Link to="/notifications" className="flex flex-col items-center">
                        <FaBell size={24} className={isNotifications ? "text-gray-400" : "text-black"} />
                        <span className={isNotifications ? "text-gray-400 text-xs border-b-4 border-gray-400" : "text-black text-xs"}>Notifications</span>
                    </Link>

                    <Link to="/jobs" className="flex flex-col items-center">
                        <IoBagRemoveOutline size={24} className={isJobs ? "text-gray-400" : "text-black"} />
                        <span className={isJobs ? "text-gray-400 text-xs border-b-4 border-gray-400" : "text-black text-xs"}>Jobs</span>
                    </Link>

                    <Link to="/messages" className="flex flex-col items-center">
                        <TiMessageTyping size={24} className={isMessages ? "text-gray-400" : "text-black"} />
                        <span className={isMessages ? "text-gray-400 text-xs border-b-4 border-gray-400" : "text-black text-xs"}>Messages</span>
                    </Link>



                    <Link to="/profile" className="flex flex-col items-center">
                        <UserRoundPen />
                        <span className="text-black text-xs">Profile</span>
                    </Link>

                </div>
                <div className="h-13 w-[2px] bg-gray-300"></div>


                <div className="flex mr-26 gap-4">
                    <button className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" id="icon-grid" fill="currentColor" aria-hidden="true" data-supported-dps="16x16" viewBox="0 0 16 16" width="24" height="24"><path d="M2 2h2.67v2.67H2zm4.67 2.67h2.67V2H6.67zM11.34 2v2.67h2.67V2zM2 9.33h2.67V6.66H2zm4.67 0h2.67V6.66H6.67zm4.67 0h2.67V6.66h-2.67zM2 14h2.67v-2.67H2zm4.67 0h2.67v-2.67H6.67zm4.67 0h2.67v-2.67h-2.67z"></path></svg>
                        <h6 className="text-xs">For Business</h6>
                    </button>
                    <button className="flex flex-col items-center">
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
                        <span className="text-black text-xs">Try Premium for ₹0</span>
                    </button>
                </div>


            </nav>
        </>
    )
}