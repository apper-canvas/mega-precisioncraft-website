import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const AboutPage = () => {
  const milestones = [
    { year: '1998', title: 'Company Founded', description: 'Started as a small precision machining shop with a focus on quality.' },
    { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 9001 certification, establishing our quality management system.' },
    { year: '2012', title: 'Facility Expansion', description: 'Expanded to a 50,000 sq ft facility with state-of-the-art equipment.' },
    { year: '2018', title: 'Aerospace Certification', description: 'Obtained AS9100D certification for aerospace manufacturing.' },
    { year: '2023', title: 'Technology Leadership', description: 'Invested in Industry 4.0 technologies and automation systems.' }
  ]

  const values = [
    {
      icon: 'Target',
      title: 'Precision',
      description: 'We maintain the highest standards of accuracy and quality in every component we manufacture.'
    },
    {
      icon: 'Shield',
      title: 'Reliability',
      description: 'Our clients depend on us for consistent delivery and performance across all projects.'
    },
    {
      icon: 'Users',
      title: 'Partnership',
      description: 'We build long-term relationships with our clients, becoming their trusted manufacturing partner.'
    },
    {
      icon: 'Zap',
      title: 'Innovation',
      description: 'We continuously invest in new technologies and processes to stay ahead of industry demands.'
    }
  ]

  const leadership = [
    {
      name: 'Robert Johnson',
      title: 'Chief Executive Officer',
      experience: '25+ years in manufacturing',
      description: 'Former engineering director at Boeing with extensive aerospace manufacturing experience.'
    },
    {
      name: 'Sarah Martinez',
      title: 'Chief Technology Officer',
      experience: '20+ years in precision manufacturing',
      description: 'Expert in advanced manufacturing technologies and quality systems implementation.'
    },
    {
      name: 'David Chen',
      title: 'VP of Operations',
      experience: '18+ years in operations management',
      description: 'Specialist in lean manufacturing and continuous improvement methodologies.'
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
              About PrecisionCraft
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              For over 25 years, we've been at the forefront of precision manufacturing, delivering exceptional quality components to industries that demand the highest standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-accent-50 to-accent-100">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mb-6">
                  <ApperIcon name="Target" className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">Our Mission</h2>
                <p className="text-secondary-700 leading-relaxed">
                  To deliver precision-engineered components that exceed our clients' expectations through advanced manufacturing technologies, rigorous quality control, and unwavering commitment to excellence. We strive to be the trusted partner that enables our clients' success in their respective industries.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-primary-50 to-primary-100">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6">
                  <ApperIcon name="Eye" className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-500 mb-4">Our Vision</h2>
                <p className="text-secondary-700 leading-relaxed">
                  To be the global leader in precision manufacturing, setting industry standards for quality, innovation, and reliability. We envision a future where our advanced manufacturing capabilities and commitment to excellence make us the first choice for companies seeking world-class precision components.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company History */}
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
              Our Journey
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              From humble beginnings to industry leadership, discover the milestones that have shaped PrecisionCraft into the company we are today.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-sm">{milestone.year.slice(-2)}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-primary-500">{milestone.title}</h3>
                          <p className="text-accent-500 font-medium">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-secondary-600">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  <div className="w-4 h-4 bg-accent-500 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every product we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-4">{value.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Meet the experienced professionals who lead PrecisionCraft with vision, expertise, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ApperIcon name="User" className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-500 mb-2">{leader.name}</h3>
                  <p className="text-accent-500 font-medium mb-2">{leader.title}</p>
                  <p className="text-secondary-500 text-sm mb-4">{leader.experience}</p>
                  <p className="text-secondary-600 leading-relaxed">{leader.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
                State-of-the-Art Facility
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Our 50,000 square foot manufacturing facility houses the latest in precision machining technology, quality control equipment, and automation systems. Every aspect of our facility is designed to optimize efficiency while maintaining the highest quality standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-600 mb-1">50,000</div>
                  <div className="text-sm text-secondary-600">Sq Ft Facility</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-600 mb-1">24/7</div>
                  <div className="text-sm text-secondary-600">Production</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-600 mb-1">150+</div>
                  <div className="text-sm text-secondary-600">Team Members</div>
                </div>
                <div className="text-center p-4 bg-accent-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-600 mb-1">99.8%</div>
                  <div className="text-sm text-secondary-600">Quality Rate</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-secondary-50 to-secondary-100">
                <h3 className="text-xl font-bold text-primary-500 mb-6">Key Capabilities</h3>
                <div className="space-y-4">
                  {[
                    'CNC Machining Centers (5-axis)',
                    'Swiss-type Turning Centers',
                    'Wire & Sinker EDM',
                    'Coordinate Measuring Machines',
                    'Surface Grinding & Finishing',
                    'Assembly & Testing Services'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-accent-500 mr-3" />
                      <span className="text-secondary-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage