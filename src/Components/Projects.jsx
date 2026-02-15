import todo from "../assets/ProjectImg/todo.png";
import ecommerce from "../assets/ProjectImg/myStoreWeb.png";
import iot from "../assets/ProjectImg/4bit-RCA.png";
import verilog from "../assets/ProjectImg/BCD_Adder.png";    

export default function Projects() {
    const projects = [
        {
            title: "MyStore - E-Commerce Platform",
            description: "Full-stack e-commerce platform featuring product listing, shopping cart management, order processing, and a user-friendly interface with complete CRUD operations.",
            image: ecommerce,
            tags: ["React.js", "Spring Boot", "MySQL", "REST API"],
            features: ["Product Catalog", "Cart Management", "Order Processing", "User Authentication"],
            link: "https://kalaimani14.github.io/my-ecommerce-store/"
        },
        {
            title: "Task Manager Web Application",
            description: "CRUD-based task management system enabling users to efficiently create, update, delete, and track daily tasks with an intuitive interface.",
            image: todo,
            tags: ["React.js", "Node.js", "MongoDB", "Express"],
            features: ["Create Tasks", "Update Status", "Delete Tasks", "Task Tracking"],
            link: "https://kalaimani14.github.io/task-manager-app/"
        },
        {
            title: "IoT Health Monitoring System",
            description: "Real-time IoT-based system designed to monitor elderly patients' vital health parameters and display data via mobile/web application.",
            image: "",
            tags: ["IoT", "Real-time Data", "Telegram", "Sensors"],
            features: ["Real-time Monitoring", "Mobile Display", "Health Alerts", "Data Visualization"],
            link: "https://github.com/Kalaimani14"
        },
        {
            title: "RCA & BCD Adder (Verilog)",
            description: "Designed and verified 4-bit Ripple Carry Adder and BCD Adder using Verilog in Xilinx Vivado with comprehensive testbench validation.",
            image: verilog,
            tags: ["Verilog", "Xilinx Vivado", "Digital Design"],
            features: ["4-bit RCA", "BCD Adder", "Testbench", "Simulation"],
            link: "https://github.com/Kalaimani14"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A showcase of my work spanning full-stack development, IoT systems, and hardware design
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gray-100 overflow-hidden">
                                {project.image ? (
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        onError={(e) => {
                                            console.log('Image failed to load:', project.title);
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
                                        <span className="text-lg font-semibold">Project Image</span>
                                    </div>
                                )}
                                
                                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-blue-600 hover:text-white transform hover:scale-105"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                            
                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {project.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center gap-1 text-sm text-gray-600">
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="mt-12 text-center">
                    <a 
                        href="https://github.com/Kalaimani14" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View More on GitHub
                    </a>
                </div>

                

            </div>
        </section>
    )
}