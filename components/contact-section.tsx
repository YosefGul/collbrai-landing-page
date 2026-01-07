"use client"

import { useState, type FormEvent } from "react"
import { Send, CheckCircle, AlertCircle, Loader2, Mail, MessageSquare, User } from "lucide-react"

export function ContactSection() {
  const [result, setResult] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("loading")
    setMessage("")

    const formData = new FormData(event.currentTarget)
    formData.append("access_key", "e2204e70-0dda-4532-9b3e-5174b1a12f8f")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("success")
        setMessage("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
        ;(event.target as HTMLFormElement).reset()
      } else {
        setResult("error")
        setMessage("Bir hata oluştu. Lütfen tekrar deneyin.")
      }
    } catch {
      setResult("error")
      setMessage("Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.")
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-neon/30 text-neon text-sm font-medium mb-6 animate-pulse">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Bizimle <span className="text-neon">İletişime</span> Geçin
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projeleriniz, sorularınız veya iş birliği fırsatları için bize ulaşın. En kısa sürede size dönüş yapacağız.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="relative">
          {/* Card Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 via-transparent to-neon/20 rounded-3xl blur-xl opacity-50" />

          <div className="relative bg-dark-lighter/80 backdrop-blur-sm border border-gray-dark rounded-2xl p-6 sm:p-8 md:p-10">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Hidden spam protection */}
              <input type="hidden" name="subject" value="Collbrai - Yeni İletişim Formu" />
              <input type="checkbox" name="botcheck" className="hidden" />

              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <User className="w-4 h-4 text-neon" />
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Adınızı ve soyadınızı girin"
                  className="w-full px-4 py-3 bg-dark border border-gray-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <Mail className="w-4 h-4 text-neon" />
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="ornek@email.com"
                  className="w-full px-4 py-3 bg-dark border border-gray-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <MessageSquare className="w-4 h-4 text-neon" />
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Mesajınızı buraya yazın..."
                  className="w-full px-4 py-3 bg-dark border border-gray-dark rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={result === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-neon text-dark font-semibold rounded-xl hover:bg-neon-light transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {result === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Mesaj Gönder
                  </>
                )}
              </button>

              {/* Status Message */}
              {message && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    result === "success"
                      ? "bg-neon/10 border border-neon/30 text-neon"
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}
                >
                  {result === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{message}</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 p-4 bg-dark-lighter/50 border border-gray-dark rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-neon/10 rounded-lg">
              <Mail className="w-6 h-6 text-neon" />
            </div>
            <div>
              <p className="text-sm text-gray-400">E-posta</p>
              <a href="mailto:info@collbrai.com" className="text-white hover:text-neon transition-colors">
                info@collbrai.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-dark-lighter/50 border border-gray-dark rounded-xl">
            <div className="w-12 h-12 flex items-center justify-center bg-neon/10 rounded-lg">
              <MessageSquare className="w-6 h-6 text-neon" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Konum</p>
              <p className="text-white">Türkiye, İstanbul</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
