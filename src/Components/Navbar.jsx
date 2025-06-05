import { Github, Linkedin, Mail } from 'lucide-react';

const Navbar = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection }) => {
  const navItems = [
    'home',
    'about',
    'education',
    'skills',
    'projects',
    'leetcode',
    'experience',
    'certifications',
    'achievements', // fixed lowercase
    'contact'
  ];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-cyan-400 font-bold text-xl">Praveen M</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-300'
                } capitalize transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item
                    ? 'bg-gray-900 text-cyan-400'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left capitalize`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
