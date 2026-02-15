export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
        },
        {
            title: "Backend Development",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
            skills: ["Java", "Spring Boot", "Node.js", "RESTful APIs", "MySQL"]
        },
        {
            title: "Hardware & Verification",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            skills: ["Digital Electronics", "Verilog", "Xilinx Vivado", "EDA Playground"]
        },
        {
            title: "Developer Tools",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            skills: ["Git", "GitHub", "VS Code", "Postman"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        My technical expertise spans across frontend, backend, and hardware development
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex}
                                        className="flex items-center gap-2 text-gray-700"
                                    >
                                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm font-medium">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}