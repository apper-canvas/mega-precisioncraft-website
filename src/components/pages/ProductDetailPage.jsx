import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { getProductById } from '@/services/api/productService'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    loadProduct()
  }, [id])

  const loadProduct = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getProductById(parseInt(id))
      if (data) {
        setProduct(data)
      } else {
        setError('Product not found')
      }
    } catch (err) {
      setError('Failed to load product details')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadProduct} />
  if (!product) return <Error message="Product not found" />

  return (
    <div className="pt-8">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link to="/" className="text-secondary-500 hover:text-accent-500 transition-colors duration-200">
            Home
          </Link>
          <ApperIcon name="ChevronRight" className="w-4 h-4 text-secondary-400" />
          <Link to="/products" className="text-secondary-500 hover:text-accent-500 transition-colors duration-200">
            Products
          </Link>
          <ApperIcon name="ChevronRight" className="w-4 h-4 text-secondary-400" />
          <span className="text-primary-500 font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-secondary-100">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                          selectedImage === index
                            ? 'ring-2 ring-accent-500 ring-offset-2'
                            : 'hover:opacity-75'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg text-secondary-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-lg font-semibold text-primary-500 mb-3">Materials</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material, index) => (
                    <span
                      key={index}
                      className="bg-secondary-100 text-secondary-700 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-lg font-semibold text-primary-500 mb-3">Applications</h3>
                <div className="space-y-2">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center">
                      <ApperIcon name="CheckCircle" className="w-5 h-5 text-accent-500 mr-3" />
                      <span className="text-secondary-700">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/request-quote" className="flex-1">
                  <Button variant="primary" icon="Send" className="w-full">
                    Request Quote
                  </Button>
                </Link>
                <Link to="/contact" className="flex-1">
                  <Button variant="secondary" icon="MessageSquare" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-6">Technical Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-secondary-200 last:border-b-0">
                    <span className="text-secondary-600 font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-primary-500 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary-500 mb-4">
              Key Features & Benefits
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Discover what makes this product stand out in terms of performance, reliability, and value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Shield',
                title: 'Exceptional Durability',
                description: 'Built to withstand demanding operating conditions with superior material properties and construction techniques.'
              },
              {
                icon: 'Zap',
                title: 'High Performance',
                description: 'Engineered for optimal performance with precise tolerances and reliable operation under stress.'
              },
              {
                icon: 'Award',
                title: 'Quality Assured',
                description: 'Manufactured under strict quality control standards with comprehensive testing and certification.'
              },
              {
                icon: 'Wrench',
                title: 'Easy Integration',
                description: 'Designed for seamless integration into existing systems with standard interfaces and mounting options.'
              },
              {
                icon: 'Clock',
                title: 'Long Service Life',
                description: 'Extended operational life reduces maintenance costs and minimizes downtime for critical applications.'
              },
              {
                icon: 'Users',
                title: 'Expert Support',
                description: 'Backed by our technical team with comprehensive documentation and ongoing support services.'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={feature.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-500 mb-3">{feature.title}</h3>
                  <p className="text-secondary-600 leading-relaxed">{feature.description}</p>
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
              Ready to Order This Product?
            </h2>
            <p className="text-xl text-secondary-100 mb-8 max-w-2xl mx-auto">
              Get a custom quote for {product.name} or contact our technical team to discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button variant="primary" size="lg" icon="Send" className="w-full sm:w-auto">
                  Request Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon="Phone" className="w-full sm:w-auto">
                  Technical Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage