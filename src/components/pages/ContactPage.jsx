import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/molecules/ContactForm";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const ContactPage = () => {
  const contactInfo = [
    {
      title: 'General Information',
      icon: 'Mail',
      details: [
        { label: 'Email', value: 'info@precisioncraft.com' },
        { label: 'Phone', value: '+1 (555) 123-4567' },
        { label: 'Fax', value: '+1 (555) 123-4568' }
      ]
    },
    {
      title: 'Sales & Quotes',
      icon: 'DollarSign',
      details: [
        { label: 'Sales Team', value: 'sales@precisioncraft.com' },
        { label: 'Direct Line', value: '+1 (555) 123-4569' },
        { label: 'Hours', value: 'Mon-Fri 8AM-6PM EST' }
      ]
    },
    {
      title: 'Technical Support',
      icon: 'Wrench',
      details: [
        { label: 'Engineering', value: 'engineering@precisioncraft.com' },
        { label: 'Support Line', value: '+1 (555) 123-4570' },
        { label: 'Hours', value: 'Mon-Fri 7AM-7PM EST' }
      ]
    },
    {
      title: 'Quality Assurance',
      icon: 'Shield',
      details: [
        { label: 'Quality Team', value: 'quality@precisioncraft.com' },
        { label: 'Direct Line', value: '+1 (555) 123-4571' },
        { label: 'Hours', value: 'Mon-Fri 8AM-5PM EST' }
      ]
    }
  ]

  const locations = [
    {
      name: 'Corporate Headquarters & Manufacturing',
      address: '1234 Industrial Drive\nManufacturing City, MC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@precisioncraft.com',
      hours: 'Mon-Fri 8AM-6PM EST'
    },
    {
      name: 'West Coast Sales Office',
      address: '5678 Technology Boulevard\nSan Francisco, CA 94105',
      phone: '+1 (555) 987-6543',
      email: 'west@precisioncraft.com',
      hours: 'Mon-Fri 8AM-6PM PST'
    }
  ]

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Ready to discuss your precision manufacturing needs? Our expert team is here to help you find the perfect solution for your project requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Contact the right department directly for faster service and specialized assistance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={contact.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-500 mb-4">{contact.title}</h3>
                  <div className="space-y-3">
                    {contact.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        <div className="text-sm text-secondary-500 font-medium">{detail.label}</div>
                        <div className="text-primary-500 font-semibold">{detail.value}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm title="Send Us a Message" />
            </motion.div>

            {/* Map & Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="p-0 overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-secondary-300/20"></div>
                  <div className="relative text-center">
                    <ApperIcon name="MapPin" className="w-16 h-16 text-accent-500 mx-auto mb-4" />
                    <p className="text-secondary-600 font-medium">Interactive Map</p>
                    <p className="text-secondary-500 text-sm">View our facility location</p>
                  </div>
                </div>
              </Card>

              {/* Locations */}
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <Card key={location.name} className="p-6">
                    <h3 className="text-lg font-bold text-primary-500 mb-4">{location.name}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <ApperIcon name="MapPin" className="w-5 h-5 text-accent-500 mr-3 mt-0.5" />
                        <div className="text-secondary-600 whitespace-pre-line">{location.address}</div>
                      </div>
                      <div className="flex items-center">
                        <ApperIcon name="Phone" className="w-5 h-5 text-accent-500 mr-3" />
                        <span className="text-secondary-600">{location.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <ApperIcon name="Mail" className="w-5 h-5 text-accent-500 mr-3" />
                        <span className="text-secondary-600">{location.email}</span>
                      </div>
                      <div className="flex items-center">
                        <ApperIcon name="Clock" className="w-5 h-5 text-accent-500 mr-3" />
                        <span className="text-secondary-600">{location.hours}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time & Support */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Clock" className="w-8 h-8 text-white" />
</div>
                <h3 className="text-xl font-bold text-primary-500 mb-3">Quick Response</h3>
                <p className="text-secondary-600 mb-4">We respond to all inquiries within 2 business hours during normal business hours.</p>
                <div className="text-2xl font-bold text-accent-500">&lt; 2 Hours</div>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Users" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-3">Expert Support</h3>
                <p className="text-secondary-600 mb-4">Our technical team has over 200 years of combined manufacturing experience.</p>
                <div className="text-2xl font-bold text-accent-500">200+ Years</div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="MessageSquare" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-3">Multiple Channels</h3>
                <p className="text-secondary-600 mb-4">Reach us via phone, email, or our contact form - whatever works best for you.</p>
                <div className="text-2xl font-bold text-accent-500">24/7</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Support</h3>
            <p className="text-secondary-100 mb-6 max-w-2xl mx-auto">
              For urgent production issues or quality concerns, our emergency support line is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center text-white">
                <ApperIcon name="Phone" className="w-5 h-5 mr-2" />
                <span className="font-semibold">Emergency: +1 (555) 123-HELP</span>
              </div>
              <div className="flex items-center text-white">
                <ApperIcon name="Mail" className="w-5 h-5 mr-2" />
                <span className="font-semibold">urgent@precisioncraft.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage