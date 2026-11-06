
import { Search, LayoutGrid, Settings, Clock, GraduationCap } from "lucide-react";
import profile from "./image/haridi.jpg";
import geminiLogo from "./image/Gemini-logo.png";
import  image from "./image/image-logo.png";
import  picture from "./image/Capture.png";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 flex flex-col h-screen w-16 items-center py-4  text-white">

      {/* Logo */}
      <div className="flex items-center justify-center h-10 w-10 ">
        <img
          src={geminiLogo}
          alt="Gemini Logo"
          className="h-8 w-auto object-contain"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col gap-3 items-center mt-10">
        <img
          src={picture}
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />

        <button className="p-2 text-gray-500 hover:text-gray-200 rounded-lg">
          <Search strokeWidth={1.5} size={20} />
        </button>

        <button className="p-2 text-gray-500 hover:text-gray-200 rounded-lg">
          <LayoutGrid strokeWidth={1.5} size={20} />
        </button>
        <img
          src={image}
          alt="Profile"
          className="h-8 w-8 rounded-full object-cover"
        />
        <Clock strokeWidth={1.5} nonScalingStroke />
        <GraduationCap strokeWidth={1.5} nonScalingStroke />
      </div>

      {/* Footer */}
      <div className="flex  flex-col items-center justify-center mt-auto">
        <Settings strokeWidth={1.5} nonScalingStroke />

      </div>
      <div className="h-8 w-8 overflow-hidden rounded-full">
        <img
        src= {profile}
        alt="Profile"
        className="h-full w-full object-cover"
        />
      </div>

    </div>
  );
}
