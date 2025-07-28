'use client'

import Navigation from '@/components/Navigation'
import HeroBanner from '@/components/HeroBanner'
import ProductSpotlight from '@/components/ProductSpotlight'
import KeyFeatures from '@/components/KeyFeatures'
import InvestorSection from '@/components/InvestorSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroBanner />
      <section id="dios">
        <ProductSpotlight />
      </section>
      <section id="features">
        <KeyFeatures />
      </section>
      <section id="partners">
        <InvestorSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  )
}