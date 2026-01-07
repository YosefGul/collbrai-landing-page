"use client"

import { useEffect, useState } from "react"
import { Construction, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[600px] md:max-w-[800px] md:h-[800px]">
        <div className="absolute inset-0 bg-gradient-to-b from-neon/20 via-neon/10 to-transparent rounded-full blur-3xl animate-neon-pulse" />
        <div
          className="absolute inset-20 bg-gradient-to-b from-neon/15 to-transparent rounded-full animate-neon-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center w-full max-w-5xl mx-auto ${mounted ? "animate-fade-in-up" : "opacity-0"}`}
      >
        {/* Under Construction Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-neon/30 bg-neon/5 backdrop-blur-sm">
          <Construction className="w-4 h-4 text-neon animate-pulse" />
          <span className="text-sm font-medium text-neon uppercase tracking-wider">Site Yapım Aşamasında</span>
        </div>

        {/* Logo / Brand Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-white via-white to-gray-light bg-clip-text text-transparent">
            COLL
          </span>
          <span className="bg-gradient-to-r from-neon to-neon-dim bg-clip-text text-transparent">BRAI</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-light font-medium mb-4 tracking-wide uppercase">
          Yapay Zeka & Görüntü İşleme
        </p>

        {/* Main Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed px-4">
          İşletmelerin üretimden hijyene, güvenlikten performansa kadar uzanan kontrol süreçlerinde{" "}
          <span className="text-neon font-semibold">yöneticilerin gözü</span> oluyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-neon text-dark font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] hover:scale-105"
          >
            <span className="relative z-10 text-dark">Keşfet</span>
            <ChevronDown className="w-5 h-5 relative z-10 text-dark group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-neon-dim to-neon opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-medium text-white font-semibold rounded-lg transition-all duration-300 hover:border-neon hover:text-neon hover:bg-neon/5"
          >
            İletişime Geç
          </a>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-8 border-t border-gray-medium/30 max-w-2xl mx-auto">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon">6+</p>
            <p className="text-xs sm:text-sm text-gray-light mt-1">Ürün</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon">%100</p>
            <p className="text-xs sm:text-sm text-gray-light mt-1">Yerli Teknoloji</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neon">6</p>
            <p className="text-xs sm:text-sm text-gray-light mt-1">Uzman Ekip</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neon/50" />
      </div>
    </section>
  )
}
