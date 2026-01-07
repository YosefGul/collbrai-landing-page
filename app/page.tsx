import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyAISection } from "@/components/why-ai-section"
import { ProductsSection } from "@/components/products-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dark overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <WhyAISection />
      <ProductsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
