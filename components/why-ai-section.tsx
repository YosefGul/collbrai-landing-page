"use client"

import { useEffect, useRef, useState } from "react"
import {
  Zap,
  TrendingUp,
  Globe,
  Handshake,
  RefreshCw,
  Camera,
  Building,
  DollarSign,
  Repeat,
  Package,
} from "lucide-react"

const whyAIReasons = [
  {
    icon: Zap,
    title: "Geleceğin Lokomotifi",
    description: "Yapay zekâ, insanlığın iş yapma biçimini kökten dönüştüren bir dönüm noktasıdır.",
  },
  {
    icon: TrendingUp,
    title: "Sınırsız Potansiyel",
    description: "Önümüzdeki on yılda trilyonlarca dolarlık bir ekonomi yaratacak.",
  },
  {
    icon: Globe,
    title: "Alanlar Üstü Etki",
    description: "Sağlıktan güvenliğe, eğitimden üretime kadar yaşamın her alanına nüfuz ediyor.",
  },
  {
    icon: Handshake,
    title: "Yatırımcı İçin Fırsat",
    description: "Bugün yapay zekâya ortak olan, geleceği şekillendiren bir yolculuğun parçası olur.",
  },
  {
    icon: RefreshCw,
    title: "Sürekli Değer Üretimi",
    description: "Satışla bitmeyen, sürekli öğrenen ve kullanıcıya her gün daha fazla fayda sağlayan ekosistem.",
  },
]

const whyVisionReasons = [
  {
    icon: Camera,
    title: "Her Yerde Kamera",
    description: "Marketlerde, fabrikalarda, otoparklarda, okullarda - her yerde.",
  },
  {
    icon: Building,
    title: "Milyarlarca Dolarlık Pazar",
    description: "Kameraların akıllı hale getirilmesi küresel pazarda 5 yıl içinde iki katına çıkacak.",
  },
  {
    icon: DollarSign,
    title: "Erken Giren Kazanır",
    description: "Türkiye ve bölgemizde bu teknoloji henüz çok yeni; büyük fırsat söz konusu.",
  },
  {
    icon: Repeat,
    title: "Tekrarlayan Gelir",
    description: "Satışın ötesinde abonelik ve bakım gelirleriyle sürdürülebilir model.",
  },
  {
    icon: Package,
    title: "Ölçeklenebilir Çözüm",
    description: "Çözümlerimiz bir kez geliştiriliyor ve defalarca satılabiliyor.",
  },
]

export function WhyAISection() {
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
    <section ref={sectionRef} className="relative py-20 md:py-32 px-4 bg-dark-secondary">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-sm font-medium mb-6">
            Neden Biz?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Geleceğin Teknolojisine <span className="text-neon">Yatırım</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Yapay zeka ve görüntü işleme teknolojileri, iş dünyasını dönüştürüyor.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Why AI */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-neon" />
              </div>
              <h3 className="text-2xl font-bold">Neden Yapay Zeka?</h3>
            </div>
            <div className="space-y-4">
              {whyAIReasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 rounded-xl bg-dark-card/50 border border-gray-dark/50 hover:border-neon/30 hover:bg-dark-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                    <reason.icon className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-400">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Vision Processing */}
          <div
            className={`transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center">
                <Camera className="w-5 h-5 text-neon" />
              </div>
              <h3 className="text-2xl font-bold">Neden Görüntü İşleme?</h3>
            </div>
            <div className="space-y-4">
              {whyVisionReasons.map((reason, index) => (
                <div
                  key={index}
                  className="group flex gap-4 p-4 rounded-xl bg-dark-card/50 border border-gray-dark/50 hover:border-neon/30 hover:bg-dark-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neon/20 transition-colors">
                    <reason.icon className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-400">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
