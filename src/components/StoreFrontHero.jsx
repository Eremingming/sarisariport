import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

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

  // Filipino sari-sari snacks and candy jars for the shelf
  const snacks = [
    { type: 'jar', label: 'Mik-Mik', emoji: '🍬', color: '#d97706' },
    { type: 'pack', label: 'Chippy', emoji: '🧂', color: '#b91c1c' },
    { type: 'pack', label: 'Piattos', emoji: '🟨', color: '#2563eb' },
    { type: 'jar', label: 'Haw Flakes', emoji: '🍥', color: '#ec4899' },
    { type: 'pack', label: 'Clover', emoji: '🟧', color: '#16a34a' },
    { type: 'jar', label: 'Pastillas', emoji: '🍭', color: '#f59e0b' },
    { type: 'pack', label: 'Nova', emoji: '🟫', color: '#7c3aed' },
    { type: 'jar', label: 'Iced Gems', emoji: '🧁', color: '#06b6d4' },
    { type: 'pack', label: 'Choc Nut', emoji: '🍫', color: '#92400e' },
    { type: 'jar', label: 'Yema', emoji: '🍯', color: '#f59e0b' },
  ]

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Awning decorative strip */}
      <div className="awning h-3 md:h-4 w-full shadow-sm"></div>
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
                      <span className="flex items-center gap-1 neon-open font-semibold">
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
              {/* Motion Shelf with Filipino snacks */}
              <div className="relative z-10">
                {[0, 1].map((row) => (
                  <div key={row} className={`mb-6 ${row === 0 ? 'mt-1' : ''}`}>
                    {/* Items on shelf */}
                    <div className="relative grid grid-cols-5 gap-3 pb-6">
                      {snacks.slice(row * 5, row * 5 + 5).map((item, i) => (
                        <motion.div
                          key={`${item.label}-${i}`}
                          className="flex flex-col items-center justify-end text-center select-none"
                          whileHover={{ y: -6, rotate: item.type === 'jar' ? -2 : 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                        >
                          {item.type === 'jar' ? (
                            <div className="w-full flex flex-col items-center">
                              {/* Jar cap */}
                              <div className="w-10 h-2 rounded-t-md border-2 border-neutral-500 bg-neutral-300 shadow-sm"></div>
                              {/* Jar body */}
                              <div className="w-14 h-14 rounded-b-2xl border-2 border-neutral-400 bg-white/70 backdrop-blur-sm relative flex items-center justify-center" style={{ boxShadow: 'inset 0 0 0 6px rgba(255,255,255,0.35), inset 0 0 18px rgba(0,0,0,0.06)' }}>
                                <span className="text-xl" style={{ color: item.color }}>{item.emoji}</span>
                              </div>
                              <span className="mt-1 text-[11px] text-neutral-700 font-medium">{item.label}</span>
                            </div>
                          ) : (
                            <div className="w-full flex flex-col items-center">
                              {/* Snack pack */}
                              <div className="w-14 h-16 rounded-md border-2 border-neutral-600 flex items-center justify-center text-white shadow" style={{ background: item.color }}>
                                <span className="text-sm">{item.emoji}</span>
                              </div>
                              <span className="mt-1 text-[11px] text-neutral-700 font-medium">{item.label}</span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                      {/* Shelf plank */}
                      <div className="absolute left-0 right-0 bottom-0 h-3 bg-wood border-2 border-neutral-600 rounded-sm shadow-[0_6px_0_rgba(0,0,0,0.1)]"></div>
                    </div>
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

    </section>
  )
}