'use client'

export default function Intro() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <header className="relative bg-gray-800 overflow-hidden">
                <div className="min-h-screen max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 lg:py-32 text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl tracking-tight text-blue-400">
                        Welcome to My Portfolio Website
                    </h2>
                    <p className="mt-6 text-xl sm:text-2xl">
                        Dive into my world of development, from projects to professional growth
                    </p>
                    <div className="mt-12">
                        <p className="text-lg sm:text-xl">
                            Hello! Thank you for taking the time to look at my portfolio. I’m Samuel Adly, a hardworking and dedicated Queens College student majoring in Computer Science. Here you’ll find a collection of my projects, experiences, and the knowledge I’ve gained throughout my academic journey.
                        </p>
                        <p className="mt-6 text-lg sm:text-xl">
                            Whether you’re a fellow student, a potential employer, or just curious about what I do, I invite you to explore my work and see how I’m contributing to the field of technology. My portfolio showcases a variety of projects ranging from software development and web design (like this one) to data analysis and algorithms. Each project reflects my commitment to learning and applying those lessons to solve real-world problems.
                        </p>
                        <p className="mt-6 text-lg sm:text-xl">
                            Thank you for visiting, and I hope you enjoy your stay!
                        </p>
                        <div className="mt-8">
                            <a
                                href="/Resume.pdf"  // Update with the actual path to your resume
                                className="inline-block px-6 py-3 rounded border-blue-400 text-blue-400 bg-gray-800  hover:bg-gray-600 border transition duration-300"
                                aria-label="Download Resume"
                            >
                                Don’t Forget to Check Out My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
