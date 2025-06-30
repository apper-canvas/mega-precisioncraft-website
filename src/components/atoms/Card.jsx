import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  gradient = false,
  ...props 
}) => {
  const baseStyles = 'rounded-lg shadow-custom transition-all duration-200'
  const hoverStyles = hover ? 'hover:shadow-custom-lg hover:scale-[1.02]' : ''
  const backgroundStyles = gradient ? 'bg-card-gradient' : 'bg-white'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`${baseStyles} ${hoverStyles} ${backgroundStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card