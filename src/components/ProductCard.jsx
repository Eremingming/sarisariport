import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductCard({ 
  title, 
  tag = 'Bestseller', 
  description = 'Project description', 
  link = '#',
  tech = ['React', 'Tailwind'],
  image = null,
  featured = false
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const chipContainer = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 }
    }
  }

  const chipItem = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 340, damping: 22, mass: 0.6 } }
  }

  const tagColors = {
    'Bestseller': 'bg-brick',
    '₱ Promo': 'bg-mustard text-neutral-900',
    'Bagong Dating': 'bg-bottle',
    'Limited': 'bg-maya',
    'Sale': 'bg-red-500'
  }

  return (
    <motion.a 
      href={link} 
      className={`group block border-2 rounded-lg overflow-hidden transition-all duration-300 ${
        featured 
          ? 'border-maya bg-gradient-to-br from-white to-chalk shadow-xl hover:shadow-2xl' 
          : 'border-maya bg-gradient-to-br from-white to-chalk shadow-xl hover:shadow-2xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      layout
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-chalk to-neutral-100">
        {image ? (
          <div className="relative w-full h-full">
            <motion.img 
              src={image} 
              alt={title}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } group-hover:scale-110`}
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.98 }}
              transition={{ duration: 0.5 }}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-maya"></div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full relative overflow-hidden">
            {/* Animated placeholder background */}
            <motion.div className="absolute inset-0 opacity-30">
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-maya/20 to-transparent"
                animate={{ opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            {/* Placeholder content */}
            <div className="relative text-center">
              <div className="text-4xl mb-2 group-hover:animate-bounce">📦</div>
              <span className="text-sm text-neutral-500">Project Preview</span>
            </div>
          </div>
        )}

        {/* Tag */}
        <motion.div className="absolute top-3 left-3 transform transition-transform duration-300" whileHover={{ rotate: 3 }}>
          <span className={`${tagColors[tag] || 'bg-neutral-600'} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg inline-flex items-center gap-1`}>
            {tag === 'Bestseller' && '🔥'}
            {tag === '₱ Promo' && '💰'}
            {tag === 'Bagong Dating' && '✨'}
            {tag}
          </span>
        </motion.div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-mustard text-neutral-900 rounded-full p-2 shadow-lg inline-block animate-pulse">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </div>
        )}

        {/* Hover overlay with quick actions */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 z-[2]`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="flex gap-2">
            <span className="bg-white/90 backdrop-blur text-neutral-800 px-3 py-1 rounded-md text-xs font-medium hover:bg-white transition">
              View Details
            </span>
            <span className="bg-white/90 backdrop-blur text-neutral-800 px-3 py-1 rounded-md text-xs font-medium hover:bg-white transition">
              Live Demo
            </span>
          </div>
        </motion.div>

        {/* Sari-sari grill overlay that slides up on hover */}
        <div
          className="absolute inset-0 grill-overlay translate-y-0 group-hover:-translate-y-full transition-transform duration-500 ease-out z-[1]"
          aria-hidden="true"
        >
          {/* optional handle bar at the bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-1 w-20 h-1.5 rounded-full bg-[rgba(0,0,0,0.25)]"></div>
        </div>
      </div>

      {/* Content */}
       <div className="p-4 ">
        {/* Title with icon */}
        <div className="flex items-start gap-2 mb-2">
          <h3 className="font-bold text-lg text-neutral-900 group-hover:text-brick transition-colors flex-1 leading-tight">
            {title}
          </h3>
          <span className="text-maya opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
            →
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
          {description}
        </p>

        {/* Tech stack */}
        <motion.div className="flex flex-wrap gap-1.5" variants={chipContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {tech.map((item, i) => (
            <motion.span 
              key={i}
              className="text-xs bg-chalk/80 border border-neutral-200 px-2 py-0.5 rounded-md text-neutral-600 group-hover:border-maya/30 group-hover:bg-maya/10 transition-all duration-300"
              variants={chipItem}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* Hover indicator */}
        <div className={`h-0.5 bg-gradient-to-r from-maya to-mustard mt-3 transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`}></div>
      </div>
    </motion.a>
  )
}