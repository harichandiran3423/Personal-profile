export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* About Text */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900">
                            Full Stack Developer with a Strong Electronics Background
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            I'm a motivated Electronics and Communication Engineering graduate from A.K.T Memorial 
                            College of Engineering & Technology with a CGPA of 7.8. My journey combines the best 
                            of both worlds - a solid foundation in electronics and digital systems, paired with 
                            modern web development expertise.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Trained in full-stack development at FITA Academy, I specialize in building scalable 
                            web applications using React, Spring Boot, and MySQL. My experience spans from creating 
                            responsive frontends to developing robust backend APIs, with hands-on projects in 
                            e-commerce platforms and IoT systems.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            I'm a quick learner with strong problem-solving abilities and a collaborative mindset. 
                            Whether it's debugging complex code or integrating hardware with software, I thrive on 
                            technical challenges and continuous learning.
                        </p>

                        {/* Achievements */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Key Achievements
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>🏆 First Prize in Debugit Hackathon (Edveon Technology - Naan Mudhalvan)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 mt-1">•</span>
                                    <span>🎖️ Best Project Model Award in college-level innovation contest</span>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-4">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">7.8</p>
                                <p className="text-gray-600 text-sm">CGPA</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">4+</p>
                                <p className="text-gray-600 text-sm">Projects</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-blue-600">3</p>
                                <p className="text-gray-600 text-sm">Internships</p>
                            </div>
                        </div>
                    </div>

                    {/* Education & Experience Timeline */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            Education & Experience
                        </h3>

                        {/* Timeline */}
                        <div className="space-y-6">
                            {/* Education */}
                            <div className="relative pl-8 border-l-2 border-blue-600">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-gray-600">2021 - 2025</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">B.E. Electronics & Communication</h4>
                                <p className="text-gray-600 text-sm">A.K.T Memorial College of Engineering & Technology</p>
                                <p className="text-gray-500 text-sm mt-1">CGPA: 7.8/10</p>
                            </div>

                            {/* Full Stack Training */}
                            <div className="relative pl-8 border-l-2 border-blue-400">
                               <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-gray-600">August 2025</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">Full Stack Development</h4>
                                <p className="text-gray-600 text-sm">FITA Academy, Chennai</p>
                                <p className="text-gray-500 text-sm mt-1">React.js, Spring Boot, MySQL</p>
                            </div>

                            {/* Internship 1 */}
                            <div className="relative pl-8 border-l-2 border-blue-400">
                               <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-gray-600">October 2024</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">Intern - Web Development</h4>
                                <p className="text-gray-600 text-sm">Jyotsna and Kevin Technologies</p>
                                <p className="text-gray-500 text-sm mt-1">Responsive Web Apps, HTML5, CSS3, Js</p>
                            </div>

                            {/* Internship 2 */}
                            <div className="relative pl-8 border-l-2 border-blue-400">
                               <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                                <div className="mb-1">
                                    <span className="text-sm font-medium text-gray-600">July 2023</span>
                                </div>
                                <h4 className="font-semibold text-gray-900">Intern - IoT Development</h4>
                                <p className="text-gray-600 text-sm">CodeBind Technologies, Chennai</p>
                                <p className="text-gray-500 text-sm mt-1">IoT Systems, Real-time Data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}