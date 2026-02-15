export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a 
                        href="#home" 
                        className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all"
                    >
                        Kalaimani L
                    </a>
                    
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <a 
                                href="#home" 
                                className="text-gray-900 font-medium hover:text-blue-600 transition-colors relative group"
                                aria-current="page"
                            >
                                Home
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-100 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#about" 
                                className="text-gray-600 font-medium hover:text-blue-600 transition-colors relative group"
                            >
                                About
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#skills" 
                                className="text-gray-600 font-medium hover:text-blue-600 transition-colors relative group"
                            >
                                Skills
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#projects" 
                                className="text-gray-600 font-medium hover:text-blue-600 transition-colors relative group"
                            >
                                Projects
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                className="text-gray-600 font-medium hover:text-blue-600 transition-colors relative group"
                            >
                                Contact
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}