"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Lightbulb, Rocket, CheckCircle2 } from "lucide-react"

export function AboutSection() {
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

  const features = [
    "Özgün yapay zeka algoritmaları",
    "Davranış ve kalite analizi",
    "Anlık ve ölçülebilir veriler",
    "İnsan hatalarını minimize etme",
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-sm font-medium mb-6">
            Hakkımızda
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Teknolojiyi <span className="text-neon">Değere</span> Dönüştürüyoruz
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Collbrai olarak, yapay zekâ destekli görüntü işleme ve davranış analizi teknolojileri geliştiriyoruz.
              Kameralardan ve sensörlerden topladığımız verileri anlamlandırarak, sahadaki her detayı anlık ve
              ölçülebilir hale getiriyoruz.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Altyapımızda, tamamen bizim tarafımızdan geliştirilen özgün yapay zekâ algoritmalarını kullanıyoruz.
              Kullandığımız modeller yalnızca görüntüleri okumuyor, aynı zamanda davranışları, kaliteyi ve uyumu da
              analiz ediyor.
            </p>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-200"
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-neon flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Card */}
          <div
            className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-dark-card to-dark-secondary border border-gray-dark overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-neon/10 flex items-center justify-center mb-6">
                  <Rocket className="w-8 h-8 text-neon" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Yatırıma Hazırız</h3>
                <p className="text-gray-400 leading-relaxed">
                  Doğru zamanda, doğru yerdeyiz: Ekibimiz ve ürünlerimiz hazır, pazardaki ihtiyacı doğru yakaladık.
                  Şimdi yatırım desteğiyle ölçeklenmeye odaklanıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div
            className={`group relative p-8 rounded-2xl bg-dark-card border border-gray-dark hover:border-neon/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-neon/10 flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-neon" />
              </div>
              <h3 className="text-xl font-bold mb-3">Misyonumuz</h3>
              <p className="text-gray-400 leading-relaxed">
                Verimlilik, kalite ve güvenlik alanlarında farklı ihtiyaç ve ölçeklere uyarlanabilen, fayda odaklı
                teknolojik çözümler geliştirmek.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div
            className={`group relative p-8 rounded-2xl bg-dark-card border border-gray-dark hover:border-neon/30 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-lg bg-neon/10 flex items-center justify-center mb-5">
                <Lightbulb className="w-6 h-6 text-neon" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vizyonumuz</h3>
              <p className="text-gray-400 leading-relaxed">
                Yenilikçi teknolojileri kullanarak süreçleri daha akıllı, hızlı ve güvenilir hale getiren, iş ve yaşamın
                dijital dönüşümünde öncü bir şirket olmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
