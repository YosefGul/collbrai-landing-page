"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 md:py-16 px-4 border-t border-gray-dark">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-white">COLL</span>
            <span className="text-neon">BRAI</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Collbrai. Tüm hakları saklıdır.</p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-neon transition-colors"
            aria-label="Sayfanın başına dön"
          >
            <span>Başa Dön</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
