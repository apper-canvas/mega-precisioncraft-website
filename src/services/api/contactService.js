// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const submitContactForm = async (formData) => {
  await delay(800)
  
  // Simulate successful submission
  console.log('Contact form submitted:', formData)
  
  // In a real app, this would send data to your backend
  return {
    success: true,
    message: 'Your message has been sent successfully!'
  }
}