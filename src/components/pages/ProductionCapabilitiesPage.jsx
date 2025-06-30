import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CapabilityCard from '@/components/molecules/CapabilityCard'
import Card from '@/components/atoms/Card'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { getCapabilities } from '@/services/api/capabilityService'

const ProductionCapabilitiesPage = () => {
  const [capabilities, setCapabilities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadCapabilities()
  }, [])

  const loadCapabilities = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getCapabilities()
      setCapabilities(data)
    } catch (err) {
      setError('Failed to load capabilities')
    } finally {
      setLoading(false)
    }
  }

  const facilityStats = [
    { label: 'Manufacturing Space', value: '50,000 sq ft', icon: 'Building' },
    { label: 'Production Lines', value: '12 Active', icon: 'Zap' },
    { label: 'Quality Stations', value: '6 Inspection', icon: 'Target' },
    { label: 'Annual Capacity', value: '2M+ Parts', icon: 'TrendingUp' }
  ]

  const processCapabilities = [
    {
      category: 'Machining Operations',
      processes: [
        'CNC Milling (3, 4, and 5-axis)',
        'CNC Turning & Swiss Machining',
        'Multi-spindle Machining',
        'High-speed Machining',
        'Micro Machining'
      ]
    },
    {
      category: 'Finishing Operations',
      processes: [
        'Surface Grinding',
        'Cylindrical Grinding',
        'Wire EDM',
        'Sinker EDM',
        'Polishing & Deburring'
      ]
    },
    {
      category: 'Assembly Services',
      processes: [
        'Mechanical Assembly',
        'Sub-assembly Integration',
        'Testing & Validation',
        'Packaging & Shipping',
        'Just-in-time Delivery'
      ]
    }
  ]

  const equipment = [
    {
      name: 'Haas VF-11SS 5-Axis Machining Center',
      specifications: [
        'Travel: 84" x 32" x 30"',
        'Spindle: 12,000 RPM',
        'Tool Capacity: 40 tools',
        'Accuracy: ±0.0001"'
      ]
    },
    {
      name: 'Doosan Puma 400LMC CNC Lathe',
      specifications: [
        'Chuck Size: 10"',
        'Max Swing: 17.7"',
        'Spindle Speed: 4,500 RPM',
        'Live Tools: 12 position'
      ]
    },
    {
      name: 'Sodick AQ750L Wire EDM',
      specifications: [
        'Work Area: 29.5" x 19.7"',
        'Max Workpiece: 1,100 lbs',
        'Wire Diameter: 0.004" - 0.012"',
        'Accuracy: ±0.00008"'
      ]
    },
    {
      name: 'Zeiss Contura G2 CMM',
      specifications: [
        'Measuring Range: 39" x 31" x 27"',
        'Accuracy: 0.9 + L/300 μm',
        'Probe System: VAST XXT',
        'Software: Calypso'
      ]
    }
  ]

  if (loading) return <Loading type="capabilities" />
  if (error) return <Error message={error} onRetry={loadCapabilities} />

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
              Production Capabilities
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Advanced manufacturing technologies and processes designed to deliver precision components that meet the most demanding specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Overview */}
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
              State-of-the-Art Facility
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Our modern manufacturing facility is equipped with the latest technology and operated by skilled professionals committed to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {facilityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={stat.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-500 mb-2">{stat.value}</div>
                  <div className="text-secondary-600">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
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
              Core Manufacturing Capabilities
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Comprehensive manufacturing services backed by advanced technology and decades of expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.Id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CapabilityCard capability={capability} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Capabilities */}
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
              Manufacturing Processes
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Comprehensive range of manufacturing processes to handle diverse component requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processCapabilities.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full">
                  <h3 className="text-xl font-bold text-primary-500 mb-6">{category.category}</h3>
                  <div className="space-y-3">
                    {category.processes.map((process, processIndex) => (
                      <div key={processIndex} className="flex items-center">
                        <ApperIcon name="CheckCircle" className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                        <span className="text-secondary-700">{process}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Specifications */}
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
              Key Equipment
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Industry-leading equipment ensuring precision, reliability, and efficiency in every operation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {equipment.map((machine, index) => (
              <motion.div
                key={machine.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-4">
                      <ApperIcon name="Settings" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary-500 mb-2">{machine.name}</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {machine.specifications.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center justify-between py-2 border-b border-secondary-100 last:border-b-0">
                        <span className="text-secondary-600 text-sm">{spec.split(':')[0]}:</span>
                        <span className="text-primary-500 font-medium text-sm">{spec.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity & Lead Times */}
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
                Production Capacity & Lead Times
              </h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Our flexible manufacturing system is designed to handle both high-volume production runs and complex, low-volume specialty components with consistent quality and competitive lead times.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <ApperIcon name="Clock" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-500">Standard Lead Time</div>
                    <div className="text-secondary-600">2-4 weeks typical</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <ApperIcon name="Zap" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-500">Rush Orders</div>
                    <div className="text-secondary-600">1-2 weeks available</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <ApperIcon name="Package" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-500">Batch Sizes</div>
                    <div className="text-secondary-600">1 to 100,000+ pieces</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-gradient-to-br from-accent-50 to-accent-100">
                <h3 className="text-xl font-bold text-primary-500 mb-6">Material Capabilities</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Aluminum Alloys',
                    'Stainless Steel',
                    'Carbon Steel',
                    'Titanium',
                    'Inconel',
                    'Brass & Bronze',
                    'Engineering Plastics',
                    'Specialty Alloys'
                  ].map((material, index) => (
                    <div key={index} className="flex items-center">
                      <ApperIcon name="CheckCircle" className="w-4 h-4 text-accent-500 mr-2" />
                      <span className="text-secondary-700 text-sm">{material}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-accent-200">
                  <h4 className="font-semibold text-primary-500 mb-3">Tolerance Capabilities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Standard:</span>
                      <span className="text-primary-500 font-medium">±0.005"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Precision:</span>
                      <span className="text-primary-500 font-medium">±0.0005"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-600">Ultra-precision:</span>
                      <span className="text-primary-500 font-medium">±0.0001"</span>
                    </div>
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

export default ProductionCapabilitiesPage