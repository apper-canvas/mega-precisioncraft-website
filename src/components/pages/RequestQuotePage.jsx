import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Card from '@/components/atoms/Card'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import ApperIcon from '@/components/ApperIcon'
import { getProducts } from '@/services/api/productService'
import { submitQuoteRequest } from '@/services/api/quoteService'

const RequestQuotePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    customerName: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    specifications: '',
    message: '',
    files: []
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      setError('Failed to load products')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({ ...prev, files }))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.customerName.trim()) newErrors.customerName = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.productInterest.trim()) newErrors.productInterest = 'Product interest is required'
    if (!formData.quantity.trim()) newErrors.quantity = 'Quantity is required'
    if (!formData.timeline.trim()) newErrors.timeline = 'Timeline is required'
    if (!formData.message.trim()) newErrors.message = 'Project description is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields')
      return
    }

    setSubmitting(true)
    try {
      await submitQuoteRequest(formData)
      toast.success('Quote request submitted successfully! We\'ll get back to you within 24 hours.')
      setFormData({
        customerName: '',
        company: '',
        email: '',
        phone: '',
        productInterest: '',
        quantity: '',
        targetPrice: '',
        timeline: '',
        specifications: '',
        message: '',
        files: []
      })
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const timelineOptions = [
    'ASAP (Rush)',
    '1-2 weeks',
    '3-4 weeks',
    '1-2 months',
    '3+ months',
    'Ongoing/Recurring'
  ]

  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadProducts} />

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
              Request a Quote
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Get a custom quote for your precision manufacturing needs. Our expert team will review your requirements and provide a detailed proposal within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Benefits */}
      <section className="py-12 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Clock" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-500 mb-2">Fast Response</h3>
                <p className="text-secondary-600">Detailed quotes delivered within 24 hours</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="DollarSign" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-500 mb-2">Competitive Pricing</h3>
                <p className="text-secondary-600">Fair, transparent pricing with no hidden costs</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ApperIcon name="Users" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-500 mb-2">Expert Consultation</h3>
                <p className="text-secondary-600">Technical guidance from experienced engineers</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-8">Quote Request Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-lg font-semibold text-primary-500 mb-4">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      error={errors.customerName}
                      icon="User"
                      required
                    />
                    <Input
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      error={errors.company}
                      icon="Building"
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      icon="Mail"
                      required
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      icon="Phone"
                      required
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-semibold text-primary-500 mb-4">Project Details</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Product Interest */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-primary-500">
                          Product of Interest <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          className={`
                            block w-full rounded-lg border-2 transition-all duration-200
                            px-4 py-3
                            ${errors.productInterest 
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                              : 'border-secondary-200 focus:border-accent-500 focus:ring-accent-500'
                            }
                            focus:outline-none focus:ring-2 focus:ring-opacity-50
                            text-primary-500
                          `}
                          required
                        >
                          <option value="">Select a product category...</option>
                          {[...new Set(products.map(p => p.category))].map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                          <option value="Custom Component">Custom Component</option>
                          <option value="Other">Other (specify in message)</option>
                        </select>
                        {errors.productInterest && (
                          <p className="text-sm text-red-600">{errors.productInterest}</p>
                        )}
                      </div>

                      <Input
                        label="Quantity Needed"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        error={errors.quantity}
                        icon="Package"
                        placeholder="e.g., 100 pieces, 1000 units"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Target Price (Optional)"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleChange}
                        icon="DollarSign"
                        placeholder="e.g., $10 per unit, $5000 total"
                      />

                      {/* Timeline */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-primary-500">
                          Timeline <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className={`
                            block w-full rounded-lg border-2 transition-all duration-200
                            px-4 py-3
                            ${errors.timeline 
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                              : 'border-secondary-200 focus:border-accent-500 focus:ring-accent-500'
                            }
                            focus:outline-none focus:ring-2 focus:ring-opacity-50
                            text-primary-500
                          `}
                          required
                        >
                          <option value="">Select timeline...</option>
                          {timelineOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        {errors.timeline && (
                          <p className="text-sm text-red-600">{errors.timeline}</p>
                        )}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-primary-500">
                        Technical Specifications
                      </label>
                      <textarea
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        rows={4}
                        className="
                          block w-full rounded-lg border-2 transition-all duration-200
                          px-4 py-3 border-secondary-200 focus:border-accent-500 focus:ring-accent-500
                          focus:outline-none focus:ring-2 focus:ring-opacity-50
                          placeholder-secondary-400 text-primary-500
                        "
                        placeholder="Material requirements, dimensions, tolerances, surface finish, etc."
                      />
                    </div>

                    {/* Project Description */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-primary-500">
                        Project Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`
                          block w-full rounded-lg border-2 transition-all duration-200
                          px-4 py-3
                          ${errors.message 
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                            : 'border-secondary-200 focus:border-accent-500 focus:ring-accent-500'
                          }
                          focus:outline-none focus:ring-2 focus:ring-opacity-50
                          placeholder-secondary-400 text-primary-500
                        `}
                        placeholder="Please describe your project requirements, intended use, quality standards, and any other relevant details..."
                        required
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-primary-500">
                        Attach Files (Optional)
                      </label>
                      <div className="border-2 border-dashed border-secondary-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors duration-200">
                        <ApperIcon name="Upload" className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                        <label className="cursor-pointer">
                          <span className="text-accent-500 font-medium hover:text-accent-600">
                            Click to upload files
                          </span>
                          <span className="text-secondary-500"> or drag and drop</span>
                          <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.dwg,.step,.stp,.iges,.igs,.jpg,.jpeg,.png"
                          />
                        </label>
                        <p className="text-xs text-secondary-500 mt-2">
                          Accepted formats: PDF, DWG, STEP, IGES, JPG, PNG (Max 10MB each)
                        </p>
                        {formData.files.length > 0 && (
                          <div className="mt-4">
                            <p className="text-sm font-medium text-primary-500 mb-2">Selected files:</p>
                            <div className="space-y-1">
                              {formData.files.map((file, index) => (
                                <div key={index} className="text-sm text-secondary-600">
                                  {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-secondary-200">
                  <Button
                    type="submit"
                    loading={submitting}
                    className="w-full"
                    icon="Send"
                    size="lg"
                  >
                    Submit Quote Request
                  </Button>
                  <p className="text-center text-sm text-secondary-500 mt-4">
                    We'll review your request and send you a detailed quote within 24 hours.
                  </p>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
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
              What Happens Next?
            </h2>
            <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
              Our streamlined quote process ensures you get the information you need quickly and accurately.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-4">Review & Analysis</h3>
                <p className="text-secondary-600 leading-relaxed">
                  Our engineering team reviews your requirements and analyzes the technical specifications to ensure feasibility and optimal manufacturing approach.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-4">Quote Preparation</h3>
                <p className="text-secondary-600 leading-relaxed">
                  We prepare a detailed quote including pricing, timeline, specifications, and any recommended design optimizations for manufacturability.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary-500 mb-4">Follow-up Call</h3>
                <p className="text-secondary-600 leading-relaxed">
                  A member of our sales team contacts you to discuss the quote, answer questions, and help move your project forward.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RequestQuotePage