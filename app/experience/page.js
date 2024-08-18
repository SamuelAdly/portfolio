'use client'
import ScrollToTop from '@/components/scrolltotop';
import { SiStarbucks } from "react-icons/si"; // Starbucks icon
import { GiCampingTent } from "react-icons/gi"; // GRYC icon
import { IoSchool } from "react-icons/io5"; // HS For CTEA icon
import { FaSchool } from "react-icons/fa"; // CUNY Queens College icon
import { GiGiftOfKnowledge } from "react-icons/gi"; // Technical Skills icon
import { FaCode } from "react-icons/fa";


export default function Experience() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="relative bg-gray-800 overflow-hidden py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-center text-blue-400">
                        Samuel Adly’s Resume
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl">
                        My professional journey is filled with learning and growth. Here’s a glimpse into my education, experience, and technical skills.
                    </p>
                    {/* Education Section */}
                    <section id="education" className="py-16">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Education</h3>
                            <div className="flex items-start space-x-4 mb-8">
                                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                    <FaSchool className="h-6 w-6"/>
                                </div>
                                <div>
                                    <p className="text-lg mb-2">
                                        <strong className='text-blue-400'>CUNY Queens College</strong><br />
                                        Bachelor of Science in Computer Science, Aug. 2021 – May 2025<br />
                                        <strong className='text-blue-400'>GPA:</strong> 3.4
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                    <IoSchool className="h-6 w-6"/>
                                </div>
                                <div>
                                    <p className="text-lg">
                                        <strong className='text-blue-400'>HS For CTEA</strong><br />
                                        Construction Major, Sep. 2017 – June 2021<br />
                                        <strong className='text-blue-400'>GPA:</strong> 3.2
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Experience Section */}
                    <section id="experience" className="py-16">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Experience</h3>
                            <div className="mt-8 space-y-8">
                                <div className="flex">
                                    <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
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
                                        <h4 className="text-xl font-bold text-blue-400">Starbucks Team Member</h4>
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
                                        <h4 className="text-xl font-bold text-blue-400">Camp Counselor</h4>
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
                    </section>
                    
                    {/* Technical Skills Section */}
                    <section id="skills" className="py-16">
                        <div className="max-w-3xl mx-auto">
                            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Technical Skills</h3>
                            <div className="flex items-start space-x-4 mb-8">
                                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                    <GiGiftOfKnowledge className="h-6 w-6"/>
                                </div>
                                <div>
                                    <p className="text-lg">
                                        <strong className='text-blue-400'>Skills:</strong> Hard working, communication, problem-solving, adaptability, time management, creativity, collaboration
                                    </p>
                                    <p className="text-lg">
                                        <strong className='text-blue-400'>Programs:</strong> PowerPoint, Excel, Word, Office
                                    </p>
                                    <p className="text-lg">
                                        <strong className='text-blue-400'>Languages:</strong> Java, C/C++, SQL, Common Lisp, Assembly Language, JavaScript, HTML/CSS
                                    </p>
                                    <p className="text-lg">
                                        <strong className='text-blue-400'>Developer Tools:</strong> MySQL, VS Code, Visual Studio, Eclipse, Vercel, Firebase
                                    </p>
                                    <p className="text-lg">
                                        <strong className='text-blue-400'>Libraries:</strong> Swing, JavaFX, React
                                    </p>
                                    <p className="text-lg">
                                        <strong className='text-blue-400'>Frameworks/Technologies:</strong> Next.js, Tailwind CSS, OpenAI, Gemini, Stripe, Clerk, Llama
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Resume Link */}
                    <div className="mt-8 text-center">
                        <a
                            href="/resume.pdf"
                            className="inline-block bg-gray-800 hover:bg-gray-600 border border-blue-400 text-blue-400 font-medium py-2 px-4 rounded"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </header>
            <ScrollToTop />
        </div>
    );
}
