import { capabilities } from '@/services/mockData/capabilities.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getCapabilities = async () => {
  await delay(350)
  return [...capabilities]
}

export const getCapabilityById = async (id) => {
  await delay(200)
  return capabilities.find(capability => capability.Id === id) || null
}