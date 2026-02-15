import profile from "../assets/profile.jpeg";
import cv from "../assets/Kalaimani_L.pdf";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <p className="text-blue-600 font-semibold text-lg">Hello, I'm</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                                Kalaimani L
                            </h1>
                            <h2 className="text-3xl md:text-4xl font-semibold text-gray-600">
                                Full Stack Developer
                            </h2>
                            <p className="text-lg text-gray-500">
                                Electronics & Communication Engineering Graduate
                            </p>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            Motivated Electronics and Communication Engineering graduate with a strong foundation in digital electronics, logic gates, RTL design, and verification using Verilog (Xilinx Vivado). Trained in full-stack development, I specialize in building scalable web applications using React, Tailwind CSS, Spring Boot, Java, and MySQL.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#contact"
                                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-white text-gray-700 font-medium rounded-lg border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                View Projects
                            </a>
                            <a
                                href={cv}
                                download
                                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-lg"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://github.com/Kalaimani14"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:kalaimani.lakshmanan14@gmail.com"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kalaimani-l-60860536b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>

                        {/* Awards Badge */}
                        <div className="flex items-center gap-3 pt-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-yellow-800">Hackathon Winner</span>
                                
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                
                                <span className="text-sm font-medium text-yellow-800">Best Project Model</span>
                            </div>
                        </div>
                       
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Decorative background circle */}
                            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-20 absolute -top-4 -left-4"></div>

                            {/* Profile Image Container */}
                            <div className="w-auto h-auto rounded-full relative overflow-hidden border-4 border-white shadow-2xl">
                                <img
                                    src={profile}
                                    alt="Kalaimani L - Full Stack Developer"
                                    className="w-full h-full object-cover "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}