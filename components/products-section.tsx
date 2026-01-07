"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Users, Sparkles, Eye, Car, GraduationCap } from "lucide-react"

const products = [
  {
    icon: Shield,
    title: "İş ve İşçi Güvenliği",
    subtitle: "İhlal Tespiti",
    description:
      "İş güvenliği yükümlülüklerini yerine getirirken kazaları ve kayıpları azaltarak maliyet avantajı sağlayın.",
  },
  {
    icon: Users,
    title: "Çalışan Performans",
    subtitle: "Yönetimi",
    description: "Görevini yapan ve yapmayan personeli somut verilerle ortaya koyan KPI sistemiyle çağ atlayın.",
  },
  {
    icon: Sparkles,
    title: "Hijyen",
    subtitle: "Kontrolü",
    description: "Gıda üretiminde hijyen standartlarını garanti altına alın, cezai riskleri ortadan kaldırın.",
  },
  {
    icon: Car,
    title: "Akıllı Otopark",
    subtitle: "Sistemi",
    description: "Gelir kayıplarını önleyin, insana bağımlılığı azaltın, güvenliği ve müşteri memnuniyetini artırın.",
  },
  {
    icon: Eye,
    title: "Görüntülü Kalite",
    subtitle: "Kontrol",
    description: "Üretim hatlarında hatalı ürünleri en erken aşamada tespit ederek zaman ve maliyet kazanın.",
  },
  {
    icon: GraduationCap,
    title: "Öğrenci Takip",
    subtitle: "ve Performans",
    description: "Öğrencilerin güvenliğini sağlayın, giriş-çıkışları takip edin, performans odaklı veriler sunun.",
  },
]

export function ProductsSection() {
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
    <section ref={sectionRef} id="products" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="inline-block px-4 py-2 rounded-full border border-neon/30 bg-neon/5 text-neon text-sm font-medium mb-6">
            Ürünlerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Sizinle Birlikte <span className="text-neon">Büyüyecek</span> Çözümler
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Bir kez geliştiriliyor, defalarca satılabiliyor. Her biri farklı sektörlere özel tasarlandı.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl bg-dark-card border border-gray-dark hover:border-neon/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(74,222,128,0.15)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon/15 via-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-all duration-300">
                  <product.icon className="w-7 h-7 text-neon" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">{product.title}</h3>
                <p className="text-neon font-medium mb-3">{product.subtitle}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {product.description}
                </p>

                {/* Coming Soon Badge */}
                <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon/10 text-neon text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
                  Yakında
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
