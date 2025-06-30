import { products } from '@/services/mockData/products.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getProducts = async () => {
  await delay(300)
  return [...products]
}

export const getProductById = async (id) => {
  await delay(200)
  return products.find(product => product.Id === id) || null
}

export const getProductsByCategory = async (category) => {
  await delay(250)
  if (category === 'All') {
    return [...products]
  }
  return products.filter(product => product.category === category)
}

export const searchProducts = async (searchTerm) => {
  await delay(300)
  const term = searchTerm.toLowerCase()
  return products.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.materials.some(material => material.toLowerCase().includes(term)) ||
    product.applications.some(app => app.toLowerCase().includes(term))
  )
}