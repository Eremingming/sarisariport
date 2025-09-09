import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard.jsx'

const projects = [
  {
    title: 'E-Padala Tracker',
    tag: 'Bestseller',
    description: 'Real-time parcel tracking system with QR codes, SMS notifications, and receipt generation.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    link: '#',
    featured: true,
    category: 'Web Apps'
  },
  {
    title: 'Load Wallet App',
    tag: '₱ Promo',
    description: 'Mobile top-up dashboard with suki loyalty system, auto-discounts, and payment gateway.',
    tech: ['Next.js', 'Tailwind', 'Stripe API', 'PostgreSQL'],
    link: '#',
    category: 'Mobile'
  },
  {
    title: 'Paninda Inventory',
    tag: 'Bagong Dating',
    description: 'Smart inventory manager with barcode scanning, price bundling, and sales analytics.',
    tech: ['Vue.js', 'Express', 'Chart.js', 'MySQL'],
    link: '#',
    category: 'Dashboard'
  },
  {
    title: 'Karinderya POS',
    tag: 'Bestseller',
    description: 'Touch-friendly point-of-sale for food stalls with daily menu management.',
    tech: ['React Native', 'Firebase', 'Tailwind'],
    link: '#',
    category: 'Mobile'
  },
  {
    title: 'Barangay Connect',
    tag: 'Limited',
    description: 'Community bulletin board app for announcements, events, and local services.',
    tech: ['React', 'Supabase', 'PWA', 'Push API'],
    link: '#',
    category: 'Web Apps'
  },
  {
    title: 'Trike Booking System',
    tag: '₱ Promo',
    description: 'Transportation booking platform with driver tracking and fare calculator.',
    tech: ['Flutter', 'Google Maps', 'Node.js'],
    link: '#',
    category: 'Mobile'
  }
]

const categories = ['All', 'Web Apps', 'Mobile', 'E-Commerce', 'Dashboard']

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [isGridView, setIsGridView] = useState(true)

  // Subtle bell chime using Web Audio API
  const playBell = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      const now = ctx.currentTime

      o.type = 'sine'
      o.frequency.setValueAtTime(1320, now) // bright tone
      g.gain.setValueAtTime(0.0001, now)
      g.gain.exponentialRampToValueAtTime(0.2, now + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.25)

      const bell = ctx.createBiquadFilter()
      bell.type = 'bandpass'
      bell.frequency.setValueAtTime(1500, now)
      bell.Q.value = 6

      o.connect(bell)
      bell.connect(g)
      g.connect(ctx.destination)
      o.start(now)
      o.stop(now + 0.3)

      // Auto close the context shortly after to free resources
      setTimeout(() => ctx.close(), 400)
    } catch (_) {
      // Ignore audio errors (e.g., autoplay restrictions)
    }
  }

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(project => 
      selectedCategory === 'All' || project.category === selectedCategory
    )

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.featured && !b.featured) return -1
          if (!a.featured && b.featured) return 1
          return 0
        case 'newest':
          return projects.indexOf(b) - projects.indexOf(a)
        case 'popular':
          const popularTags = ['Bestseller', '₱ Promo']
          const aPopular = popularTags.includes(a.tag)
          const bPopular = popularTags.includes(b.tag)
          if (aPopular && !bPopular) return -1
          if (!aPopular && bPopular) return 1
          return 0
        default:
          return 0
      }
    })

    return filtered
  }, [selectedCategory, sortBy])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.05 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 26, mass: 0.6 } },
    exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.18 } }
  }

  return (
    <div className="space-y-6 grain-soft tint-warm">
      {/* Specials of the Day */}

      {/* Filter Bar */}
      <div className="window-grid card-paper relative grid-overlay rounded-lg p-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={(e) => {
                  if (cat !== selectedCategory) {
                    setSelectedCategory(cat)
                    // trigger micro-interactions
                    if (e.currentTarget) {
                      e.currentTarget.classList.remove('swing-once')
                      // force reflow to restart animation if present
                      // eslint-disable-next-line no-unused-expressions
                      e.currentTarget.offsetHeight
                      e.currentTarget.classList.add('swing-once')
                      setTimeout(() => e.currentTarget.classList.remove('swing-once'), 650)
                    }
                    playBell()
                  }
                }}
                className={`price-chip chip-press ${selectedCategory === cat ? 'price-chip--active' : ''}`}
                whileTap={{ scale: 0.96 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Sort */}
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-maya"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest</option>
              <option value="popular">Most Popular</option>
            </select>

            {/* View Toggle */}
            <div className="flex items-center bg-chalk rounded-md border border-neutral-300 p-0.5">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-1.5 rounded transition-all ${
                  isGridView ? 'bg-white shadow-sm' : ''
                }`}
                aria-label="Grid view"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-1.5 rounded transition-all ${
                  !isGridView ? 'bg-white shadow-sm' : ''
                }`}
                aria-label="List view"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Active filters indicator */}
        {selectedCategory !== 'All' && (
          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-neutral-600">Active filter:</span>
            <span className="bg-maya/10 text-maya px-2 py-1 rounded-md text-xs flex items-center gap-1">
              {selectedCategory}
              <button 
                onClick={() => setSelectedCategory('All')}
                className="ml-1 hover:bg-maya hover:text-white rounded-full w-4 h-4 flex items-center justify-center text-xs transition-colors"
              >
                ×
              </button>
            </span>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-600">
          Showing {filteredAndSortedProjects.length} of {projects.length} projects
        </p>
        {filteredAndSortedProjects.length === 0 && (
          <span className="text-sm text-neutral-500 italic">No projects match your filters</span>
        )}
      </div>

      {/* Projects Grid/List */}
      {filteredAndSortedProjects.length > 0 ? (
        <motion.div
          className={
            isGridView 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
          }
          variants={containerVariants}
          initial="hidden"
          animate="show"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                exit="exit"
                layout
              >
                <ProductCard
                  title={project.title}
                  tag={project.tag}
                  description={project.description}
                  tech={project.tech}
                  link={project.link}
                  featured={project.featured}
                  isListView={!isGridView}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="text-6xl mb-4">🏪</div>
          <h3 className="text-xl font-semibold text-neutral-700 mb-2">Walang nakita!</h3>
          <p className="text-neutral-600 mb-4">No projects match your current filters.</p>
          <motion.button 
            onClick={() => {
              setSelectedCategory('All')
              setSortBy('featured')
            }}
            className="bg-maya text-white px-4 py-2 rounded-md hover:bg-maya/90 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            Clear all filters
          </motion.button>
        </motion.div>
      )}
    </div>
  )
}