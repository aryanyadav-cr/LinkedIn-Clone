
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#e9e5df] text-xs text-gray-500 px-6 py-4 mt-6   ">
      
      {/* Links Section */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
        <span className="hover:underline cursor-pointer">About</span>
        <span className="hover:underline cursor-pointer">Accessibility</span>
        <span className="hover:underline cursor-pointer">Help Center</span>
        <span className="hover:underline cursor-pointer">Privacy & Terms</span>
        <span className="hover:underline cursor-pointer">Ad Choices</span>
        <span className="hover:underline cursor-pointer">Advertising</span>
        <span className="hover:underline cursor-pointer">Business Services</span>
        <span className="hover:underline cursor-pointer">Get the LinkedIn app</span>
        <span className="hover:underline cursor-pointer">More</span>
      </div>
<div className="mt-3 flex items-center gap-4 md:text-right text-black">
      <div className="flex items-center text-blue-600 font-bold"><p>Linked</p><FaLinkedin /></div>
      
        LinkedIn Corporation © 2026
      </div>

    </footer>
  );
}