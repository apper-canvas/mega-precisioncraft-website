import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import { submitContactForm } from '@/services/api/contactService'

const ContactForm = ({ title = "Get In Touch", showTitle = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields')
      return
    }

    setLoading(true)
    try {
      await submitContactForm(formData)
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-custom-lg p-8">
      {showTitle && (
        <h3 className="text-2xl font-bold text-primary-500 mb-6">{title}</h3>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            icon="User"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Input
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          icon="MessageSquare"
          required
        />

        <div className="space-y-2">
          <label className="block text-sm font-medium text-primary-500">
            Message <span className="text-red-500">*</span>
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
            placeholder="Tell us about your project requirements..."
            required
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          loading={loading}
          className="w-full"
          icon="Send"
        >
          Send Message
        </Button>
      </form>
    </div>
  )
}

export default ContactForm