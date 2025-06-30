import React from 'react'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const CapabilityCard = ({ capability }) => {
  return (
    <Card className="p-8 text-center group">
      <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
        <ApperIcon name={capability.icon} className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-primary-500 mb-4">{capability.title}</h3>
      
      <p className="text-secondary-500 mb-6 leading-relaxed">
        {capability.description}
      </p>

      {capability.specifications && (
        <div className="space-y-2">
          {capability.specifications.map((spec, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-secondary-500">{spec.label}:</span>
              <span className="text-primary-500 font-medium">{spec.value}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  )
}

export default CapabilityCard