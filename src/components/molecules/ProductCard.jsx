import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/products/${product.Id}`)
  }

  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white/90 backdrop-blur-sm text-primary-500 px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-500 mb-2 group-hover:text-accent-500 transition-colors duration-200">
          {product.name}
        </h3>
        
        <p className="text-secondary-500 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-primary-500 mb-2">Key Specifications:</h4>
          <div className="space-y-1">
            {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-secondary-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span className="text-primary-500 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.materials.slice(0, 3).map((material, index) => (
              <span
                key={index}
                className="bg-accent-50 text-accent-700 px-2 py-1 rounded text-xs font-medium"
              >
                {material}
              </span>
            ))}
            {product.materials.length > 3 && (
              <span className="text-secondary-400 text-xs">+{product.materials.length - 3} more</span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-sm text-secondary-500">
            <ApperIcon name="Package" className="w-4 h-4 mr-1" />
            <span>{product.applications.length} Applications</span>
          </div>
          
          <Button
            variant="primary"
            size="sm"
            onClick={handleViewDetails}
            icon="ArrowRight"
            iconPosition="right"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard