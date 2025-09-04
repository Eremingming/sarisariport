import { useState, useEffect } from 'react'

export default function StoreFrontHero() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const products = [
    { icon: '🎨', label: 'Design' },
    { icon: '⚛️', label: 'React' },
    { icon: '📱', label: 'Mobile' },
    { icon: '🚀', label: 'Fast' },
    { icon: '✨', label: 'Clean' },
    { icon: '🛠️', label: 'Build' },
    { icon: '💡', label: 'Ideas' },
    { icon: '🎯', label: 'Focus' },
    { icon: '🏆', label: 'Quality' }
  ]

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-maya/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-mustard/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          {/* Animated Signboard */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div 
              className="relative w-full transform transition-transform duration-700 hover:scale-105"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
              }}
            >
              {/* Hanging chain effect */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 bg-neutral-600"></div>
                <div className="w-2 h-2 bg-neutral-700 rounded-full -ml-0.5"></div>
              </div>
              
              {/* Main signboard */}
              <div className="bg-gradient-to-br from-maya to-maya/90 text-white rounded-lg shadow-signage px-6 py-10 w-full text-center relative overflow-hidden">
                {/* Wood texture overlay */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-transparent via-black/20 to-transparent"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-mustard text-2xl animate-pulse">★</span>
                    <span className="text-chalk/80 mx-2 text-sm">SINCE 2025</span>
                    <span className="text-mustard text-2xl animate-pulse">★</span>
                  </div>
                  <h1 className="signage text-4xl md:text-5xl leading-tight">
                    Tindahan ni<br/>{`{Your Name}`}
                  </h1>
                  <div className="mt-3 space-y-1">
                    <p className="text-chalk/90 text-sm font-light tracking-wide">
                      Frontend Developer & Designer
                    </p>
                    <div className="flex items-center justify-center gap-2 text-xs text-chalk/70">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Open Now
                      </span>
                      <span>•</span>
                      <span>{formatTime(currentTime)}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative corner brackets */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-chalk/30"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-chalk/30"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-chalk/30"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-chalk/30"></div>
              </div>

              {/* Shadow for depth */}
              <div className="absolute inset-0 bg-black/20 rounded-lg transform translate-y-2 -z-10 blur-sm"></div>
            </div>
          </div>

          {/* Interactive Window Grid */}
          <div className="md:col-span-3">
            <div className="window-grid rounded-lg p-4 relative overflow-hidden">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
              
              {/* Product grid */}
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {products.map((product, i) => (
                  <div 
                    key={i} 
                    className="product-tile aspect-square bg-gradient-to-br from-chalk to-white border-2 border-neutral-300 rounded-md flex flex-col items-center justify-center text-sm text-neutral-700 hover:scale-110 hover:shadow-xl hover:border-maya transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-2xl mb-1 group-hover:animate-bounce">{product.icon}</span>
                    <span className="text-xs font-medium">{product.label}</span>
                  </div>
                ))}
              </div>

              {/* Store info bar */}
              <div className="mt-4 bg-white/80 backdrop-blur rounded-md p-3 border border-neutral-200">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">●</span>
                      <span className="text-neutral-600 font-medium">Bukas Daily</span>
                    </span>
                    <span className="text-neutral-500">8AM - 8PM</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="sticker text-xs animate-wiggle">New!</span>
                    <span className="price-tag">Suki Price</span>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-4 text-center">
                <a href="#projects" className="inline-flex items-center gap-2 bg-bottle text-white px-6 py-3 rounded-md hover:bg-bottle/90 transition-all duration-300 group">
                  <span>Browse Products</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-neutral-500 text-sm flex flex-col items-center gap-1">
            <span>Scroll down</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}