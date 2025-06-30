import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CertificationBadge from '@/components/molecules/CertificationBadge'
import Card from '@/components/atoms/Card'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { getCertifications } from '@/services/api/certificationService'

const QualityStandardsPage = () => {
  const [certifications, setCertifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCertifications()
  }, [])

  const loadCertifications = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getCertifications()
      setCertifications(data)
    } catch (err) {
      setError('Failed to load certifications')
    } finally {
      setLoading(false)
    }
  }

  const qualityMetrics = [
    { label: 'Defect Rate', value: '< 0.2%', icon: 'Target' },
    { label: 'On-Time Delivery', value: '99.8%', icon: 'Clock' },
    { label: 'Customer Satisfaction', value: '99.9%', icon: 'Star' },
    { label: 'First Pass Yield', value: '98.5%', icon: 'CheckCircle' }
  ]

  const qualityProcesses = [
    {
      title: 'Incoming Inspection',
      description: 'All raw materials undergo comprehensive inspection upon receipt to ensure they meet specifications.',
      icon: 'Search'
    },
    {
      title: 'In-Process Control',
      description: 'Statistical process control and real-time monitoring throughout all manufacturing operations.',
      icon: 'BarChart3'
    },
    {
      title: 'Final Inspection',
      description: 'Every component receives thorough inspection using calibrated measuring equipment.',
      icon: 'CheckSquare'
    },
    {
      title: 'Continuous Improvement',
      description: 'Regular analysis of quality data drives continuous improvement initiatives and process optimization.',
      icon: 'TrendingUp'
    }
  ]

  const qualityTools = [
    {
      name: 'Coordinate Measuring Machines (CMM)',
      description: 'Zeiss Contura G2 CMM systems for precise dimensional verification',
      capabilities: ['3D measurements', 'GD&T verification', 'First article inspection', 'Statistical analysis']
    },
    {
      name: 'Surface Profilers',
      description: 'Advanced surface measurement systems for texture and roughness analysis',
      capabilities: ['Surface roughness Ra/Rz', 'Waviness measurements', '3D surface mapping', 'Contour analysis']
    },
    {
      name: 'Optical Measurement Systems',
      description: 'High-precision optical measurement for complex geometries',
      capabilities: ['Non-contact measurement', 'Edge detection', 'Thread inspection', 'Radius verification']
    },
    {
      name: 'Material Testing Equipment',
      description: 'Comprehensive material property verification capabilities',
      capabilities: ['Hardness testing', 'Tensile testing', 'Chemical analysis', 'Metallurgical inspection']
    }
  ]

  const complianceStandards = [
    {
      category: 'Aerospace',
      standards: ['AS9100D', 'NADCAP', 'ITAR Registered', 'Boeing D1-9000']
    },
    {
      category: 'Automotive',
      standards: ['IATF 16949', 'VDA 6.3', 'AIAG Guidelines', 'Ford Q1']
    },
    {
      category: 'Medical',
      standards: ['ISO 13485', 'FDA 21 CFR Part 820', 'MDR Compliance', 'MDSAP']
    },
    {
      category: 'General',
      standards: ['ISO 9001:2015', 'ISO 14001:2015', 'OSHA Compliance', 'RoHS Directive']
    }
  ]

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadCertifications} />

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
              Quality Standards & Certifications
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Our commitment to quality excellence is demonstrated through rigorous standards, comprehensive certifications, and continuous improvement processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Metrics */}
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
              Quality Performance Metrics
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Our quality metrics demonstrate our unwavering commitment to excellence and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={metric.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-500 mb-2">{metric.value}</div>
                  <div className="text-secondary-600">{metric.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Current Certifications
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Our certifications demonstrate our commitment to maintaining the highest quality standards across all industries we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.Id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CertificationBadge certification={certification} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
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
              Quality Control Process
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Our comprehensive quality control process ensures every component meets or exceeds specifications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <ApperIcon name={process.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary-500 mb-3">{process.title}</h3>
                      <p className="text-secondary-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Tools & Equipment */}
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
              Quality Assurance Equipment
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              State-of-the-art measurement and testing equipment ensures accurate quality verification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {qualityTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                      <ApperIcon name="Settings" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-500 mb-2">{tool.name}</h3>
                      <p className="text-secondary-600 mb-4">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {tool.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center">
                        <ApperIcon name="CheckCircle" className="w-4 h-4 text-accent-500 mr-2" />
                        <span className="text-secondary-700 text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
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
              Industry Compliance Standards
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              We maintain compliance with industry-specific standards to serve diverse markets effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-bold text-primary-500 mb-4 text-center">{category.category}</h3>
                  <div className="space-y-3">
                    {category.standards.map((standard, standardIndex) => (
                      <div key={standardIndex} className="flex items-center">
                        <ApperIcon name="Shield" className="w-4 h-4 text-accent-500 mr-3 flex-shrink-0" />
                        <span className="text-secondary-700 text-sm">{standard}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-20 bg-hero-gradient relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Quality Policy
              </h2>
              <p className="text-lg text-secondary-100 mb-8 leading-relaxed">
                At PrecisionCraft, quality is not just a goal—it's the foundation of everything we do. Our comprehensive quality management system ensures that every component we manufacture meets or exceeds our customers' expectations.
              </p>
              
              <div className="space-y-4">
                {[
                  'Customer requirements are our primary focus',
                  'Continuous improvement drives our processes',
                  'Employee training ensures consistent quality',
                  'Supplier partnerships maintain material standards',
                  'Data-driven decisions optimize performance'
                ].map((principle, index) => (
                  <div key={index} className="flex items-center">
                    <ApperIcon name="CheckCircle" className="w-5 h-5 text-accent-400 mr-3" />
                    <span className="text-secondary-100">{principle}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Quality Commitment</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-300 mb-1">Zero</div>
                    <div className="text-secondary-100 text-sm">Defects Goal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-300 mb-1">100%</div>
                    <div className="text-secondary-100 text-sm">Inspection Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-300 mb-1">24/7</div>
                    <div className="text-secondary-100 text-sm">Quality Monitoring</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QualityStandardsPage