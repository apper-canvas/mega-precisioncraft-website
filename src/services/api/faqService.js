import mockData from '@/services/mockData/faqs.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getAll = async () => {
  await delay(300)
  return [...mockData]
}

export const getById = async (id) => {
  await delay(200)
  const faq = mockData.find(item => item.Id === parseInt(id))
  return faq ? { ...faq } : null
}

export const getByCategory = async (category) => {
  await delay(250)
  const filtered = mockData.filter(item => 
    item.category.toLowerCase() === category.toLowerCase()
  )
  return filtered.map(item => ({ ...item }))
}