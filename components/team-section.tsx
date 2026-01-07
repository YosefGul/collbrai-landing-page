"use client"

import { useEffect, useRef, useState } from "react"

const team = [
  {
    name: "Serkan Gül",
    role: "İş Geliştirme Uzmanı",
    initial: "SG",
  },
  {
    name: "Yusuf İhsan Gül",
    role: "Proje Yöneticisi",
    initial: "YG",
  },
  {
    name: "Emel Gül",
    role: "Algı ve Davranış Uzmanı",
    initial: "EG",
  },
  {
    name: "Faruk Özyurt",
    role: "Ürün Geliştirme Uzmanı",
    initial: "FÖ",
  },
  {
    name: "Ramazan",
    role: "Frontend Developer",
    initial: "R",
  },
  {
    name: "Tuğçe Özyurt",
    role: "Satış ve Pazarlama Uzmanı",
    initial: "TÖ",
  },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="relative py-20 md:py-32 px-4 bg-dark-secondary">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-sm font-medium mb-6">
            Ekibimiz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Teknolojiyi <span className="text-neon">Kazanca</span> Dönüştüren Ekip
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Yazılım, yapay zekâ, proje yönetimi ve iş geliştirme konusunda uzman kadromuz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-dark-card border border-gray-dark hover:border-neon/30 transition-all duration-500 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon/30 to-neon/10 flex items-center justify-center border-2 border-neon/20 group-hover:border-neon/50 group-hover:scale-105 transition-all duration-300">
                  <span className="text-2xl font-bold text-neon">{member.initial}</span>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold mb-1 group-hover:text-neon transition-colors">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
