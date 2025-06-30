import React from 'react'
import ApperIcon from '@/components/ApperIcon'

const Input = ({ 
  label, 
  type = 'text', 
  error, 
  icon, 
  className = '',
  required = false,
  ...props 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-primary-500">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ApperIcon name={icon} className="h-5 w-5 text-secondary-400" />
          </div>
        )}
        <input
          type={type}
          className={`
            block w-full rounded-lg border-2 transition-all duration-200
            ${icon ? 'pl-10' : 'pl-4'} pr-4 py-3
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-secondary-200 focus:border-accent-500 focus:ring-accent-500'
            }
            focus:outline-none focus:ring-2 focus:ring-opacity-50
            placeholder-secondary-400 text-primary-500
          `}
          required={required}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 flex items-center">
          <ApperIcon name="AlertCircle" className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  )
}

export default Input