import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const FAQAccordion = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!faqs || faqs.length === 0) {
    return (
      <div className="text-center py-12">
        <ApperIcon name="MessageCircle" className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
        <p className="text-secondary-500">No FAQs available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card key={faq.Id} className="overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-inset"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${faq.Id}`}
          >
            <h3 className="text-lg font-semibold text-primary-700 pr-4">
              {faq.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <ApperIcon 
                name="ChevronDown" 
                className="w-5 h-5 text-secondary-600" 
              />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-answer-${faq.Id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="prose prose-secondary max-w-none">
                    <p className="text-secondary-700 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                    {faq.category && (
                      <div className="mt-4 pt-4 border-t border-secondary-200">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                          <ApperIcon name="Tag" className="w-3 h-3 mr-1" />
                          {faq.category}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      ))}
    </div>
  )
}

export default FAQAccordion