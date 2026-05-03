import img2 from "./img2.png";
import Footer from "./Footer";
export default function Notify() {

    const butt = ["All", "Jobs", "My posts", "Mentions"];

    return (
        <div className="flex justify-center bg-[#e9e5df] min-h-screen pt-20 gap-4">
            <div className="grid w-55 h-68 items-start bg-gray-200 rounded-lg">
                <div className="h-15 w-55 bg-gray-300 rounded-lg"></div>
                <div className="absolute top-25 left-43 rounded-full h-25 w-25  overflow-hidden">
                    <img
                        src={img2}
                        alt="Profile"
                        className="w-full h-full object-cover bg-white"
                    />
                </div>
                <div className="relative  p-3 top-10"> <h2 >Name</h2></div>
                <div className="relative   p-3 text-xs  top-0.5"><h5>Lorem ipsum dolor sit amet consectetur...,!</h5>
                    <span className="relative   text-xs top-2">Haridwar , UTTARAKHAND</span></div>
                <div className="p-3 text-left">
                    <div className="font-medium text-sm">Manage your notifications</div>
                    <div className="text-xs text-blue-600 cursor-pointer">View Setting</div>
                </div>
            </div>
            <div className="flex w-129 h-15 bg-white gap-2 p-2 rounded-lg">
                {butt.map((item) =>
                    <button className="px-4 py-2 rounded-full bg-teal-600 text-white ">{item}</button>)}
            </div>



            <div className="grid w-66 h-62">
            <Footer /></div>
        </div>
    )
}