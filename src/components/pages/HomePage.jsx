import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ProductCard from '@/components/molecules/ProductCard'
import CapabilityCard from '@/components/molecules/CapabilityCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { getProducts } from '@/services/api/productService'
import { getCapabilities } from '@/services/api/capabilityService'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [capabilities, setCapabilities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      setError('')
      const [productsData, capabilitiesData] = await Promise.all([
        getProducts(),
        getCapabilities()
      ])
      setProducts(productsData.slice(0, 3))
      setCapabilities(capabilitiesData.slice(0, 3))
    } catch (err) {
      setError('Failed to load data')
    } finally {
      setLoading(false)
    }
  }

  const stats = [
    { label: 'Years of Experience', value: '25+', icon: 'Calendar' },
    { label: 'Projects Completed', value: '10,000+', icon: 'CheckCircle' },
    { label: 'Industry Certifications', value: '15+', icon: 'Award' },
    { label: 'Client Satisfaction', value: '99.8%', icon: 'Star' }
  ]

  const testimonials = [
    {
      quote: "PrecisionCraft consistently delivers exceptional quality components that meet our stringent aerospace requirements. Their attention to detail is unmatched.",
      author: "Sarah Johnson",
      title: "Chief Engineer, AeroTech Solutions"
    },
    {
      quote: "We've partnered with PrecisionCraft for over 10 years. Their reliability and technical expertise make them our go-to manufacturing partner.",
      author: "Michael Chen",
      title: "Supply Chain Director, AutoParts Inc."
    }
  ]

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadData} />

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient min-h-screen flex items-center">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Precision Engineering,
                <span className="block text-accent-200">Delivered.</span>
              </h1>
              <p className="text-xl text-secondary-100 mb-8 leading-relaxed max-w-lg">
                Leading manufacturer of precision components with 25+ years of experience serving aerospace, automotive, and industrial sectors worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-quote">
                  <Button variant="primary" size="lg" icon="Send" className="w-full sm:w-auto">
                    Request Quote
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="secondary" size="lg" icon="Package" className="w-full sm:w-auto">
                    View Products
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <ApperIcon name={stat.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-secondary-200 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Manufacturing Capabilities
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              State-of-the-art equipment and processes designed to deliver precision components that meet the most demanding specifications.
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/production-capabilities">
              <Button variant="primary" icon="ArrowRight" iconPosition="right">
                View All Capabilities
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
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
              Featured Products
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Discover our range of precision-engineered components trusted by industry leaders worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.Id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <Button variant="primary" icon="Package" iconPosition="right">
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators Section */}
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Our commitment to quality and reliability has earned us partnerships with leading companies across multiple industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-8 h-full">
                  <div className="flex items-start mb-4">
                    <ApperIcon name="Quote" className="w-8 h-8 text-accent-500 mr-4 flex-shrink-0" />
                    <p className="text-secondary-700 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mr-4">
                      <ApperIcon name="User" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary-500">{testimonial.author}</div>
                      <div className="text-secondary-500 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient relative">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
              Get a custom quote for your precision manufacturing needs. Our expert team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button variant="primary" size="lg" icon="Send" className="w-full sm:w-auto">
                  Request Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon="Phone" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage