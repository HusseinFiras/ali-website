import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Prices', path: '/pricing' },
    { name: 'Hiring', path: '/hiring' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'العربية', path: '#', isLang: true }
  ]

  return (
    <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-primary-purple rounded-md flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <span className="ml-2 text-xl font-bold text-primary-purple">Smart Media</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.isLang ? (
                    <a href="#" className="font-medium text-dark-text hover:text-primary-purple">
                      {link.name}
                    </a>
                  ) : (
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        isActive 
                          ? "font-medium text-primary-purple relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary-orange after:bottom-[-5px] after:left-0" 
                          : "font-medium text-dark-text hover:text-primary-purple"
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <Link to="/contact" className="hidden md:block btn btn-primary">
            SCHEDULE A CALL
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-primary-purple text-2xl"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="pt-5 pb-4 md:hidden">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name} className="text-center">
                  {link.isLang ? (
                    <a 
                      href="#" 
                      className="font-medium text-dark-text hover:text-primary-purple block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        isActive 
                          ? "font-medium text-primary-purple block py-2" 
                          : "font-medium text-dark-text hover:text-primary-purple block py-2"
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
              <li className="text-center pt-2">
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  SCHEDULE A CALL
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header