import React from 'react'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Production Capabilities', href: '/production-capabilities' }
  ]

  const services = [
    { name: 'Custom Manufacturing', href: '/products' },
    { name: 'Quality Assurance', href: '/quality-standards' },
    { name: 'Engineering Consultation', href: '/contact' },
    { name: 'Prototype Development', href: '/request-quote' }
  ]

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'AS9100D',
    'IATF 16949'
  ]

  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="Hexagon" className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PrecisionCraft</span>
            </Link>
            <p className="text-secondary-100 mb-6 leading-relaxed">
              Leading manufacturer of precision components with over 25 years of experience delivering quality solutions to aerospace, automotive, and industrial sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200">
                <ApperIcon name="Linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200">
                <ApperIcon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-200 hover:text-white transition-colors duration-200">
                <ApperIcon name="Facebook" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-200 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ApperIcon name="ChevronRight" className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-secondary-200 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ApperIcon name="ChevronRight" className="w-4 h-4 mr-2" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <ApperIcon name="MapPin" className="w-5 h-5 mr-3 mt-0.5 text-accent-400" />
                <div className="text-secondary-200">
                  <p>1234 Industrial Drive</p>
                  <p>Manufacturing City, MC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <ApperIcon name="Phone" className="w-5 h-5 mr-3 text-accent-400" />
                <span className="text-secondary-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <ApperIcon name="Mail" className="w-5 h-5 mr-3 text-accent-400" />
                <span className="text-secondary-200">info@precisioncraft.com</span>
              </div>
            </div>

            <h4 className="text-sm font-semibold mb-3">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="bg-accent-500/20 text-accent-200 px-2 py-1 rounded text-xs font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-200 text-sm">
              © {currentYear} PrecisionCraft Manufacturing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-secondary-200 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-200 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-200 hover:text-white text-sm transition-colors duration-200">
                Quality Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer