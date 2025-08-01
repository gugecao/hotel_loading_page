import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import KeyBenefits from '@/components/KeyBenefits'
import GlobalMap from '@/components/GlobalMap'
import Testimonials from '@/components/Testimonials'
import ContactGuide from '@/components/ContactGuide'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <KeyBenefits />
        <GlobalMap />
        <Testimonials />
        <ContactGuide />
      </main>
      <Footer />
    </div>
  )
}