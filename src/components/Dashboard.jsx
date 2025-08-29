import { FaInstagram, FaPinterest, FaTwitter, FaMedium, FaSpotify, FaFacebook, FaWordpress } from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export default function SocialCircle() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-900">
      <div className="relative w-80 h-80 rounded-full bg-white flex items-center justify-center shadow-lg">
        
        {/* Center Icon */}
        <div className="w-16 h-16 rounded-full bg-purple-700 flex items-center justify-center text-white text-3xl">
          🔗
        </div>

        {/* Instagram (top) */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <FaInstagram className="text-pink-500 text-3xl" />
        </div>

        {/* Dropbox (top-right) */}
        <div className="absolute top-16 right-6">
          <SiDropbox className="text-blue-500 text-3xl" />
        </div>

        {/* WordPress (mid-right) */}
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
          <FaWordpress className="text-gray-700 text-3xl" />
        </div>

        {/* Facebook (bottom-right) */}
        <div className="absolute bottom-16 right-6">
          <FaFacebook className="text-blue-700 text-3xl" />
        </div>

        {/* Spotify (bottom) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <FaSpotify className="text-green-500 text-3xl" />
        </div>

        {/* Medium (bottom-left) */}
        <div className="absolute bottom-16 left-6">
          <FaMedium className="text-green-700 text-3xl" />
        </div>

        {/* Twitter (mid-left) */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <FaTwitter className="text-blue-400 text-3xl" />
        </div>

        {/* Pinterest (top-left) */}
        <div className="absolute top-16 left-6">
          <FaPinterest className="text-red-500 text-3xl" />
        </div>
      </div>
    </div>
  );
}
