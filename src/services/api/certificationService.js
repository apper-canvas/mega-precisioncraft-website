import { certifications } from '@/services/mockData/certifications.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getCertifications = async () => {
  await delay(400)
  return [...certifications]
}

export const getCertificationById = async (id) => {
  await delay(200)
  return certifications.find(cert => cert.Id === id) || null
}