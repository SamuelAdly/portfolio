'use client'
import { VscGithubAlt } from "react-icons/vsc";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineOpenAI, AiOutlineHtml5 } from "react-icons/ai";
import { SiGooglegemini, SiClerk, SiVite, SiFirebase } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { FaCss3Alt, FaJava, FaReact, FaStripe } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import ScrollToTop from '@/components/scrolltotop';




export default function projects () {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="relative bg-gray-800 overflow-hidden">
                {/* Projects Section */}
                <section id="projects" className="py-16 sm:py-24 bg-gray-800">
                    <div className="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center space-x-4 mb-8">
                            <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-center text-blue-400">All Projects</h2>
                            <a href="https://github.com/SamuelAdly" className="rounded-full border border-blue-400 p-2 hover:bg-blue-600 transition duration-300">
                                <VscGithubAlt className="text-blue-400 w-8 h-8" />
                            </a>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-10">
                            {/* Project 1 */}
                            <a href="NotDoneYetMustFinish" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-5/6 mx-auto h-96">
                                <img
                                    src="Movo.jpg"
                                    alt="Movo"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                                    <h3 className="text-3xl font-bold text-blue-600">Movo</h3>
                                    <p className="mt-2 text-center">AI Powered Movie/TV Show Suggestion and Tracking Service</p>
                                    <div className="mt-4 flex space-x-4">
                                        <AiOutlineOpenAI/>
                                        <FaReact/>
                                        <DiJavascript/>
                                        <SiVite/>
                                        <TbBrandVercel/>
                                        <AiOutlineHtml5/>
                                        <RiTailwindCssFill/>
                                    </div>
                                </div>
                            </a>
                            {/* Project 2 */}
                            <a href="https://card-crafter.vercel.app/" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-5/6 mx-auto h-96">
                                <img
                                    src="cardCrafter.png"
                                    alt="Card Crafter"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                                    <h3 className="text-3xl font-bold text-blue-600">Card Crafter</h3>
                                    <p className="mt-2 text-center">AI Powered Flashcard Creator, Storage, and Organization Service</p>
                                    <div className="mt-4 flex space-x-4">
                                        <AiOutlineOpenAI/>
                                        <FaReact/>
                                        <DiJavascript/>
                                        <TbBrandVercel/>
                                        <RiTailwindCssFill/>
                                        <FaCss3Alt/>
                                        <FaStripe/>
                                        <SiClerk/>
                                        <SiFirebase/>
                                        <RiNextjsLine/>
                                    </div>
                                </div>
                            </a>
                            {/* Project 3 */}
                            <a href="https://snkr-chat-bot.vercel.app/" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-5/6 mx-auto h-96">
                                <img
                                    src="snkrs.png"
                                    alt="SNKRS Chat Bot"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                                    <h3 className="text-3xl font-bold text-blue-600">SNKRS Chat Bot</h3>
                                    <p className="mt-2 text-center">AI Powered Chat Bot inspired By Nike SNKRS App</p>
                                    <div className="mt-4 flex space-x-4">
                                        <FaReact/>
                                        <DiJavascript/>
                                        <TbBrandVercel/>
                                        <RiTailwindCssFill/>
                                        <FaCss3Alt/>
                                        <SiGooglegemini/>
                                        <RiNextjsLine/>
                                    </div>
                                </div>
                            </a>
                            {/* Project 4 */}
                            <a href="https://pantry-tracker-three-coral.vercel.app/" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-5/6 mx-auto h-96">
                                <img
                                    src="pantry.png"
                                    alt="Pantry Tracker"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                                    <h3 className="text-3xl font-bold text-blue-600">Pantry Tracker</h3>
                                    <p className="mt-2 text-center">Pantry Tracker With Search, Edit, Delete, and Increment Features</p>
                                    <div className="mt-4 flex space-x-4">
                                        <FaReact/>
                                        <DiJavascript/>
                                        <TbBrandVercel/>
                                        <FaCss3Alt/>
                                        <SiFirebase/>
                                        <RiNextjsLine/>
                                    </div>
                                </div>
                            </a>
                            {/* Project 5 */}
                            <a href="https://github.com/SamuelAdly/Homework-Planner" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-5/6 mx-auto h-96">
                                <img
                                    src="homeworkPlanner.png"
                                    alt="Homework Planner"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                                    <h3 className="text-3xl font-bold text-blue-600">Homework Planner</h3>
                                    <p className="mt-2 text-center">Java GUI to Track Homework Capable of Adding and Deleting Homeworks</p>
                                    <div className="mt-4 flex space-x-4">
                                        <FaJava/>
                                </div>
                                </div>
                            </a>
                            {/* Project 6 */}
                            <a href="https://github.com/SamuelAdly/Calculator" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 w-5/6 mx-auto h-96">
                                <img
                                    src="calculator.png"
                                    alt="Calculator"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
                                    <h3 className="text-3xl font-bold text-blue-600">Calculator</h3>
                                    <p className="mt-2 text-center">Basic Calculator Created Using Java</p>
                                    <div className="mt-4 flex space-x-4">
                                        <FaJava/>
                                </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </header>
            <ScrollToTop/>
        </div>
    );
}
