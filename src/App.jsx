import React from "react";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope, 
  FaTelegramPlane 
} from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-8 text-center drop-shadow-md">
        🚀 Connect With Me
      </h1>

      {/* Buttons */}
      <div className="w-full max-w-xs sm:max-w-sm flex flex-col gap-4">

        {/* Instagram */}
        <a 
          href="https://www.instagram.com/arunmeenaa___?igsh=MXIycmxwbHU2ZnZuMw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md hover:bg-pink-50 hover:shadow-pink-300 hover:scale-105 transition-all"
        >
          <FaInstagram className="text-xl sm:text-2xl text-pink-500" />
          <span className="text-base sm:text-lg font-medium">Instagram</span>
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/arunmeena0312" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 hover:shadow-blue-300 hover:scale-105 transition-all"
        >
          <FaLinkedin className="text-xl sm:text-2xl text-blue-700" />
          <span className="text-base sm:text-lg font-medium">LinkedIn</span>
        </a>

        {/* Telegram */}
        <a 
          href="https://t.me/arunmeena_17" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md hover:bg-sky-50 hover:shadow-sky-300 hover:scale-105 transition-all"
        >
          <FaTelegramPlane className="text-xl sm:text-2xl text-sky-500" />
          <span className="text-base sm:text-lg font-medium">Telegram</span>
        </a>

        {/* Threads */}
        <a 
          href="https://www.threads.com/@arunmeenaa___" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-gray-400 hover:scale-105 transition-all"
        >
          <RiThreadsFill className="text-xl sm:text-2xl text-black" />
          <span className="text-base sm:text-lg font-medium">Threads</span>
        </a>

        {/* Email with hover text swap */}
        <a 
          href="mailto:meenaarun738@gmail.com" 
          className="group flex items-center gap-3 w-full p-3 sm:p-4 bg-white rounded-lg shadow-md hover:bg-red-50 hover:shadow-red-300 hover:scale-105 transition-all"
        >
          <FaEnvelope className="text-xl sm:text-2xl text-red-500" />
          {/* Swap text on hover */}
          <span className="text-base sm:text-lg font-medium">
            <span className="block group-hover:hidden">Email Me</span>
            <span className="hidden group-hover:block">meenaarun738@gmail.com</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
