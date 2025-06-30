import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No items found", 
  description = "There are no items to display at the moment.",
  actionText = "Get Started",
  onAction,
  icon = "Package"
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 p-8 text-center">
      <div className="w-20 h-20 bg-gradient-to-br from-accent-50 to-accent-100 rounded-full flex items-center justify-center mb-6">
        <ApperIcon name={icon} className="w-10 h-10 text-accent-500" />
      </div>
      <h3 className="text-xl font-semibold text-primary-500 mb-2">{title}</h3>
      <p className="text-secondary-500 mb-8 max-w-md">
        {description}
      </p>
      {onAction && (
        <button
          onClick={onAction}
          className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 shadow-lg"
        >
          {actionText}
        </button>
      )}
    </div>
  )
}

export default Empty