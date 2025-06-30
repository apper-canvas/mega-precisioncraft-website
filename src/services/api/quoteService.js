// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const submitQuoteRequest = async (quoteData) => {
  await delay(1000)
  
  // Simulate successful submission
  console.log('Quote request submitted:', quoteData)
  
  // In a real app, this would send data to your backend
  return {
    success: true,
    quoteId: `QR-${Date.now()}`,
    message: 'Your quote request has been submitted successfully!'
  }
}