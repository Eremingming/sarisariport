import { useState, useEffect } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSkill, setCurrentSkill] = useState(0)

  const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '📘' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'UI/UX Design', level: 85, icon: '✨' },
    { name: 'Node.js', level: 80, icon: '🟢' }
  ]

  const achievements = [
    { icon: '🏆', label: 'Best Sari-sari Store Design', year: '2025' },
    { icon: '⭐', label: '50+ Satisfied Customers', year: 'Since 2024' },
    { icon: '🚀', label: 'Fast Loading Websites', year: 'Always' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    
    const section = document.getElementById('about-section')
    if (section) observer.observe(section)
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [skills.length])

  return (
    <div id="about-section" className="space-y-8 grain-soft tint-warm">
      {/* Awning decorative strip */}
      <div className="awning h-3 md:h-4 w-full shadow-sm"></div>
      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-white border-2 border-neutral-300 rounded-full px-4 py-2 shadow-sm">
          <span className="text-maya text-xl">👋</span>
          <span className="font-semibold text-neutral-700">Get to Know Me</span>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="window-grid card-paper relative grid-overlay rounded-lg overflow-hidden shadow-lg">
            {/* Header with store sign */}
            <div className="bg-gradient-to-r from-maya to-bottle p-4 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
              </div>
              <div className="relative flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏪</span>
                </div>
                <div>
                  <h3 className="signage heading-retro text-2xl mb-1">Tindero/Tindera's Corner</h3>
                  <p className="text-white/90 text-sm">Your friendly neighborhood developer</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-neutral-700 leading-relaxed">
                  Kumusta! I'm <span className="font-bold text-maya">{`{Your Name}`}</span>, a front-end developer and designer inspired by everyday
                  Filipino ingenuity. This portfolio is styled like a sari-sari store—simple,
                  approachable, and always open for suki.
                </p>
                
                <div className="bg-chalk/50 rounded-lg p-4 border-l-4 border-maya">
                  <p className="text-neutral-700 italic">
                    "I build web experiences that feel friendly and fast, with thoughtful details and clean code. 
                    Like a good sari-sari store, everything you need is here and easy to find!"
                  </p>
                </div>

                <p className="text-neutral-700">
                  My approach combines modern web technologies with Filipino hospitality—creating digital spaces 
                  that welcome users and make them feel at home. I love shipping UI systems, microinteractions, 
                  and performant applications that serve real people with real needs.
                </p>

                {/* Skills showcase */}
                <div className="mt-6">
                  <h4 className="font-semibold text-neutral-800 mb-3">Core Skills</h4>
                  <div className="space-y-2">
                    {skills.map((skill, index) => (
                      <div key={skill.name} className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-neutral-700">{skill.name}</span>
                            <span className="text-xs text-neutral-500">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-neutral-200 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r from-maya to-bottle h-2 rounded-full transition-all duration-1000 ${
                                isVisible ? 'scale-x-100' : 'scale-x-0'
                              }`}
                              style={{ 
                                width: `${skill.level}%`,
                                transformOrigin: 'left',
                                transitionDelay: `${index * 200}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-2 space-y-4">
          {/* Live Skills Display */}
          <div className="window-grid card-paper relative grid-overlay rounded-lg p-4 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h4 className="font-semibold text-neutral-800">Currently Working With</h4>
            </div>
            <div className="text-center py-4">
              <div className="text-4xl mb-2 animate-bounce">{skills[currentSkill].icon}</div>
              <div className="font-medium text-neutral-700">{skills[currentSkill].name}</div>
              <div className="text-xs text-neutral-500 mt-1">
                {skills[currentSkill].level}% Proficiency
              </div>
            </div>
          </div>

          {/* Achievements */}
          {/* <div className="window-grid rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span>🏆</span>
              Achievements
            </h4>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-md hover:bg-chalk/50 transition-colors">
                  <span className="text-xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-neutral-700">{achievement.label}</div>
                    <div className="text-xs text-neutral-500">{achievement.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Stickers Collection */}
          <div className="bg-white border-2 border-neutral-300 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span>🏷️</span>
              Collection
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="sticker hover:scale-110 transition-transform cursor-pointer">Tatak Pinoy</span>
              <span className="sticker hover:scale-110 transition-transform cursor-pointer">Suki</span>
              <span className="sticker hover:scale-110 transition-transform cursor-pointer">Bukas</span>
              <span className="sticker hover:scale-110 transition-transform cursor-pointer">New</span>
              <span className="sticker hover:scale-110 transition-transform cursor-pointer">Quality</span>
              <span className="sticker hover:scale-110 transition-transform cursor-pointer">Fast</span>
            </div>
          </div>

          {/* Tools & Tech */}
          <div className="bg-white border-2 border-neutral-300 rounded-lg p-4 shadow-sm">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span>🛠️</span>
              Tools & Tech
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 p-2 bg-chalk/30 rounded">
                <span>⚛️</span>
                <span>React, Vite</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-chalk/30 rounded">
                <span>🎨</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-chalk/30 rounded">
                <span>🟢</span>
                <span>Node, REST/JSON</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-chalk/30 rounded">
                <span>✨</span>
                <span>Figma, Design</span>
              </div>
            </div>
          </div>

          {/* Fun fact */}
          <div className="bg-gradient-to-br from-mustard/20 to-maya/20 border-2 border-mustard/30 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">💡</span>
              <h4 className="font-semibold text-neutral-800">Fun Fact</h4>
            </div>
            <p className="text-sm text-neutral-700">
              Just like a sari-sari store has everything you need in one place, 
              I aim to be your one-stop developer for all frontend needs! 🏪✨
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}