import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [hoveredContact, setHoveredContact] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    { 
      icon: '📍', 
      label: 'Location', 
      value: 'Metro Manila, PH',
      detail: 'Available for meetups and collaborations',
      color: 'text-red-500'
    },
    { 
      icon: '⏰', 
      label: 'Hours', 
      value: 'Bukas: 8AM - 8PM daily',
      detail: 'Quick response guaranteed during business hours',
      color: 'text-blue-500'
    },
    { 
      icon: '📫', 
      label: 'Email', 
      value: 'hello@example.com',
      detail: 'Best way to reach me for project inquiries',
      color: 'text-green-500'
    },
    { 
      icon: '💼', 
      label: 'LinkedIn', 
      value: '/in/yourname',
      detail: 'Let\'s connect professionally',
      color: 'text-blue-600'
    }
  ]

  const quickMessages = [
    "Hi! I'd like to discuss a project.",
    "Let's talk about collaboration opportunities.",
    "I need help with web development.",
    "Interested in your design services."
  ]

  return (
    <div className="space-y-8 grain-soft tint-warm">
      {/* Awning decorative strip */}
      <div className="awning h-3 md:h-4 w-full shadow-sm"></div>
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-neutral-900 text-white border-2 border-neutral-800 rounded-full px-4 py-2 shadow-sm">
          <span className="text-mustard text-xl">📞</span>
          <span className="font-semibold">Get In Touch</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="window-grid card-paper relative grid-overlay rounded-lg overflow-hidden shadow-lg">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-4 relative">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <div>
                <h3 className="signage heading-retro text-2xl">Order Slip</h3>
                <p className="text-white/90 text-sm">Send me a message, suki!</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                <h4 className="text-xl font-semibold text-maya mb-2">Salamat, Suki!</h4>
                <p className="text-neutral-600">Your message has been sent. I'll get back to you soon!</p>
              </div>
            ) : (
              <>
                {/* Quick Message Templates */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Quick Templates
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {quickMessages.map((message, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setFormData({...formData, message})}
                        className="text-left text-xs p-2 bg-chalk/50 hover:bg-chalk border border-neutral-200 rounded-md transition-colors"
                      >
                        💬 {message}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maya focus:border-maya transition-colors" 
                      placeholder="Your name" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maya focus:border-maya transition-colors" 
                      placeholder="you@email.com" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-maya focus:border-maya transition-colors resize-none" 
                      placeholder="Sabihin mo lang, suki! Tell me about your project..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-neutral-400 cursor-not-allowed' 
                        : 'bg-bottle text-white hover:bg-bottle/90 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Send Message</span>
                        <span className="opacity-90">→</span>
                      </div>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Contact Information Panel */}
        <div className="window-grid card-paper relative grid-overlay rounded-lg overflow-hidden shadow-lg">
          {/* Panel Header */}
          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <div>
                <h3 className="signage heading-retro text-2xl">Contact Info</h3>
                <p className="text-white/90 text-sm">Quick ways to reach me</p>
              </div>
            </div>
          </div>

          {/* Panel Content */}
          <div className="p-6 space-y-3">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredContact(index)}
                onMouseLeave={() => setHoveredContact(null)}
                className="flex items-start gap-3 p-3 border border-neutral-300 rounded-md hover:bg-chalk transition-colors"
              >
                <div className={`text-xl ${item.color}`}>{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-neutral-900">{item.label}</div>
                    <div className="text-xs text-neutral-600">{hoveredContact === index ? 'Tap to copy' : ''}</div>
                  </div>
                  <div className="text-neutral-800">{item.value}</div>
                  {hoveredContact === index && (
                    <div className="text-xs text-neutral-600 mt-1">{item.detail}</div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Quick CTA */}
            <a
              href="mailto:hello@example.com"
              className="block text-center w-full py-3 px-4 rounded-md font-medium transition-all duration-300 bg-neutral-900 text-white hover:bg-neutral-800 hover:transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Email Me Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}