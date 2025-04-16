import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaTelegram, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const otherLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Prices', path: '/pricing' },
    { name: 'Hiring', path: '/hiring' },
  ]

  const socialLinks = [
    { icon: <FaFacebookF />, path: '#' },
    { icon: <FaInstagram />, path: '#' },
    { icon: <FaLinkedinIn />, path: '#' },
    { icon: <FaWhatsapp />, path: '#' },
    { icon: <FaTelegram />, path: '#' },
  ]

  return (
    <footer className="bg-light-bg pt-16 pb-8">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Social Icons */}
          <div>
            <Link to="/">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-orange to-primary-purple rounded-md flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <span className="ml-2 text-xl font-bold text-primary-purple">Smart Media</span>
              </div>
            </Link>
            <div className="flex mt-5">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.path} className="mr-3 bg-primary-purple text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors duration-300" aria-label="Social Media">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary-purple mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-light-text hover:text-primary-purple">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-xl font-bold text-primary-purple mb-5">Another</h3>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-light-text hover:text-primary-purple">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-primary-purple mb-5">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+13072137973" className="flex items-center text-light-text hover:text-primary-purple">
                <FaPhone className="text-primary-purple mr-3" />
                USA (307) 213-7973
              </a>
              <a href="tel:+7704669669" className="flex items-center text-light-text hover:text-primary-purple">
                <FaPhone className="text-primary-purple mr-3" />
                Iraq (770) 466-9669
              </a>
              <a href="mailto:info@smartmedia.llc" className="flex items-center text-light-text hover:text-primary-purple">
                <FaEnvelope className="text-primary-purple mr-3" />
                info@smartmedia.llc
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-light-text mb-3">All Rights Reserved @ Smart Media</p>
          <div className="flex justify-center space-x-4 flex-wrap">
            <a href="#" className="text-primary-purple hover:underline">Our Terms & Conditions</a>
            <a href="#" className="text-primary-purple hover:underline">Cancellation and Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer