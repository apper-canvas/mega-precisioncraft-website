import React from 'react'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const CertificationBadge = ({ certification }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const isExpiringSoon = () => {
    const validUntil = new Date(certification.validUntil)
    const today = new Date()
    const sixMonthsFromNow = new Date(today.getTime() + (6 * 30 * 24 * 60 * 60 * 1000))
    return validUntil <= sixMonthsFromNow
  }

  return (
    <Card className="p-6 text-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4">
          <ApperIcon name="Award" className="w-8 h-8 text-white" />
        </div>
        
        <h3 className="text-lg font-bold text-primary-500 mb-2">{certification.name}</h3>
        
        <p className="text-secondary-500 text-sm mb-3">Issued by {certification.issuer}</p>
        
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
          isExpiringSoon() 
            ? 'bg-yellow-100 text-yellow-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          <ApperIcon name="Calendar" className="w-3 h-3 mr-1" />
          Valid until {formatDate(certification.validUntil)}
        </div>

        {certification.documentUrl && (
          <a
            href={certification.documentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent-500 hover:text-accent-600 text-sm font-medium transition-colors duration-200"
          >
            <ApperIcon name="Download" className="w-4 h-4 mr-1" />
            Download Certificate
          </a>
        )}
      </div>
    </Card>
  )
}

export default CertificationBadge