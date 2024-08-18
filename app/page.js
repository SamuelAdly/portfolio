'use client'
import Head from "next/head";
import { ScrollText, Handshake } from 'lucide-react';
import ScrollToTop from '@/components/scrolltotop'; 
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlineOpenAI, AiOutlineHtml5 } from "react-icons/ai";
import { SiGooglegemini, SiClerk, SiVite, SiFirebase } from "react-icons/si";
import { TbBrandVercel } from "react-icons/tb";
import { FaCss3Alt, FaReact, FaStripe } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiStarbucks } from "react-icons/si"; // Starbucks icon
import { GiCampingTent } from "react-icons/gi"; // GRYC icon
import { FaCode } from "react-icons/fa";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Samuel Adly Portfolio</title>
        <meta name="description" content="Samuel Adly Landing Page"/>
      </Head>
      <main>
        {/* Welcome Section */}
        <header className="relative bg-gray-800 overflow-hidden">
            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 lg:py-32 text-center">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight text-blue-400">Welcome to my Portfolio</h1>
                <p className="mt-6 text-xl sm:text-2xl">Dive into my world of development, from projects to professional growth</p>
                <a href="#projects" className="mt-8 inline-block bg-gray-800 hover:bg-gray-600 border border-blue-400 text-blue-400 font-medium py-3 px-6 mr-2 rounded-md transition duration-150 ease-in-out">
                    View Projects
                </a>
                <a href="/Resume.pdf" className="mt-8 inline-block bg-gray-800 hover:bg-gray-600 border border-blue-400 text-blue-400 font-medium py-3 px-6 rounded-md transition duration-150 ease-in-out" target="_blank" rel="noopener noreferrer">
                View Resume
                </a>
            </div>
        </header>

        {/* Introduction Section */}
        <section id="intro" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-blue-400">Introduction</h2>
                <p className="mt-4 text-lg sm:text-xl">
                  Hello and welcome! I`m Samuel Adly, a dedicated and enthusiastic developer with a passion for crafting innovative and impactful solutions. As a committed Computer Science major at Queens College, I`m excited to share a showcase of my projects, experiences, and the valuable knowledge I`ve accumulated during my academic journey. Thank you for exploring my portfolio—I hope you find it inspiring and insightful.
                </p>
            </div>
            <div className="mt-4 text-center">
              <a href="/intro" className="inline-block bg-gray-800 hover:bg-gray-600 border border-blue-400 text-blue-400 font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out">
                Full Introduction
              </a>
            </div>
        </section>

{/* Projects Section */}
<section id="projects" className="py-16 sm:py-24 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-blue-400">Projects</h2>
        <p className="mt-4 text-lg sm:text-xl">
            Take a look at some of the projects I’ve worked on. Each one reflects my dedication to excellence and creativity
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <a href="NotDoneYetMustFinish" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                    src="Movo.jpg"
                    alt="Movo"
                    className="w-full h-64 object-cover rounded-lg"
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
            <a href="https://card-crafter.vercel.app/" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                    src="cardCrafter.png"
                    alt="Card Crafter"
                    className="w-full h-64 object-cover rounded-lg"
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
            <a href="https://snkr-chat-bot.vercel.app/" className="relative group bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                    src="snkrs.png"
                    alt="SNKRS Chat Bot"
                    className="w-full h-64 object-cover rounded-lg"
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
        </div>
        <div className="mt-8 text-center">
            <a href="/projects" className="inline-block bg-gray-800 hover:bg-gray-600 border border-blue-400 text-blue-400 font-medium py-3 px-6 rounded-md transition duration-150 ease-in-out">
                View All Projects
            </a>
        </div>
    </div>
</section>



        {/* Experience Section */}
        <section id="experience" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-blue-400">Experience</h2>
                <p className="mt-4 text-lg sm:text-xl">
                    My professional journey is filled with learning and growth. Here`s a glimpse into my experiences across various roles and industries.
                </p>
                <div className="mt-8 space-y-8">
                    <div className="flex">
                        <div className="h-12 w-14 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <FaCode className="h-6 w-6"/>
                        </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-blue-400">Headstarter AI Fellowship</h4>
                                <p className="text-lg">July 2024-September 2024</p>
                                <p className="mt-2">
                                    <a href='https://headstarter.co/' target="_blank" className="text-blue-400 font-bold">Online Program</a><br />
                                    • Engaged in a fellowship with intensive hands-on experience, enhancing Software Engineering skills through the development and deployment of diverse AI projects.<br />
                                    • Collaborated effectively with fellow Software Engineers, contributing to team efforts and gaining valuable insights during hackathons and interview preparation.<br />
                                    • Demonstrated adaptability and commitment by actively participating in a rigorous seven-week program, successfully balancing multiple project tasks and contributing to team success.
                                </p>
                            </div>
                    </div>
                    <div className="flex">
                        <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <SiStarbucks className="h-6 w-6"/>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-2xl font-bold text-blue-400">Starbucks Team Member</h3>
                            <p className="text-lg">June 2022 – Present</p>
                            <p className="mt-2">
                                <strong className="text-blue-400">Target Store 1344 Elmhurst, NY</strong><br />
                                • Proven ability to deliver exceptional customer service, ensuring satisfaction and resolving issues effectively<br />
                                • Demonstrated proficiency in collaborating with diverse teams to achieve goals in fast-paced environments<br />
                                • Strong track record of efficiently managing multiple tasks, prioritizing responsibilities, and thriving in dynamic work settings
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <GiCampingTent className="h-6 w-6"/>
                        </div>
                        <div className="ml-4">
                            <h3 className="text-2xl font-bold text-blue-400">Camp Counselor</h3>
                            <p className="text-lg">July 2021 – August 2021</p>
                            <p className="mt-2">
                                <strong className="text-blue-400">GRYC Ozone Park, NY</strong><br />
                                • Successfully led and mentored campers, fostering personal growth and creating a positive camp experience<br />
                                • Effectively resolved conflicts and addressed challenges to ensure a safe and harmonious camp environment<br />
                                • Designed and led engaging activities, fostering teamwork and creativity among campers while ensuring their safety and enjoyment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <a href="/experience" className="inline-block bg-gray-800 hover:bg-gray-600 border border-blue-400 text-blue-400 font-medium py-3 px-6 rounded-md transition duration-150 ease-in-out">
                    View All Experiences
                </a>
                </div>
        </section>
    </main>

      {/* Footer */}
    <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Samuel Adly. All rights reserved.
            </p>
        </div>
    </footer>

      {/* Floating Scroll to Top Button */}
    <ScrollToTop/>
    </div>
    );
}
