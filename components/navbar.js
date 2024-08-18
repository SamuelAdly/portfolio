import { Home, FolderOpen, Mails, ScrollText, Handshake } from 'lucide-react';
import { IoHomeSharp } from "react-icons/io5";
import { FaHandshake, FaFolderOpen, FaScroll } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


export default function Navbar() {
    return (
        <nav className="z-50 bg-gradient-to-r from-black to-gray-800 shadow-lg fixed w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2 text-white hover:text-blue-100 transition duration-150 ease-in-out">
                            <IoHomeSharp className=" text-blue-400 h-6 w-6 sm:h-7 sm:w-7" />
                            <span className=" text-blue-400 font-bold text-xl sm:text-2xl tracking-tight">Samuel Adly</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="/intro" className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center space-x-1">
                            <FaHandshake className="text-blue-400 h-5 w-5" />
                            <span className=" text-blue-400 hidden sm:inline">Introduction</span>
                        </a>
                        <a href="/projects" className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center space-x-1">
                            <FaFolderOpen className="text-blue-400 h-5 w-5" />
                            <span className="text-blue-400 hidden sm:inline">Projects</span>
                        </a>
                        <a href="/experience" className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center space-x-1">
                            <FaScroll className="text-blue-400 h-5 w-5" />
                            <span className="text-blue-400 hidden sm:inline">Experience</span>
                        </a>
                        <a href="/contact" className="text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center space-x-1">
                            <FaMessage className="text-blue-400 h-5 w-5" />
                            <span className="text-blue-400 hidden sm:inline">Contact</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
