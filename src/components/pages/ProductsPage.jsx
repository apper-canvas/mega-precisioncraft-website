import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/molecules/ProductCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import Input from '@/components/atoms/Input'
import ApperIcon from '@/components/ApperIcon'
import { getProducts } from '@/services/api/productService'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    filterProducts()
  }, [products, searchTerm, selectedCategory])

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

  const filterProducts = () => {
    let filtered = products

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.materials.some(material => 
          material.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    setFilteredProducts(filtered)
  }

  const categories = ['All', ...new Set(products.map(product => product.category))]

  if (loading) return <Loading type="products" />
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
              Our Products
            </h1>
            <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
              Discover our comprehensive range of precision-engineered components designed to meet the most demanding specifications across multiple industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-96">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon="Search"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-accent-500 text-white shadow-lg'
                      : 'bg-secondary-100 text-secondary-700 hover:bg-accent-100 hover:text-accent-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-secondary-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white text-accent-500 shadow-sm'
                    : 'text-secondary-500 hover:text-accent-500'
                }`}
              >
                <ApperIcon name="Grid3x3" className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white text-accent-500 shadow-sm'
                    : 'text-secondary-500 hover:text-accent-500'
                }`}
              >
                <ApperIcon name="List" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-secondary-600">
              Showing {filteredProducts.length} of {products.length} products
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <Empty
              title="No products found"
              description={
                searchTerm || selectedCategory !== 'All'
                  ? "Try adjusting your search criteria or browse all products."
                  : "We're currently updating our product catalog. Please check back soon."
              }
              icon="Package"
              actionText="Clear Filters"
              onAction={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
                  : 'space-y-6'
              }
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.Id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={viewMode === 'list' ? 'w-full' : ''}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Category Highlights */}
      {selectedCategory === 'All' && !searchTerm && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
                Product Categories
              </h2>
              <p className="text-xl text-secondary-500 max-w-3xl mx-auto">
                Explore our diverse range of precision components designed for specific industry applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.slice(1).map((category, index) => {
                const categoryProducts = products.filter(p => p.category === category)
                const categoryIcons = {
                  'Aerospace Components': 'Plane',
                  'Automotive Parts': 'Car',
                  'Medical Devices': 'Heart',
                  'Industrial Equipment': 'Cog',
                  'Electronics': 'Cpu'
                }

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setSelectedCategory(category)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-lg shadow-custom p-8 text-center hover:shadow-custom-lg transition-all duration-200 group-hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <ApperIcon name={categoryIcons[category] || 'Package'} className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary-500 mb-3 group-hover:text-accent-500 transition-colors duration-200">
                        {category}
                      </h3>
                      <p className="text-secondary-500 mb-4">
                        {categoryProducts.length} products available
                      </p>
                      <div className="inline-flex items-center text-accent-500 font-medium">
                        <span>View Products</span>
                        <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default ProductsPage