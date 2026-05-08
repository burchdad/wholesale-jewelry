import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { brands } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Estate Jewelry Acquisitions',
  description:
    'Maison Aure acquires fine jewelry, estate collections, and signed pieces from private sellers. Discreet, confidential, and expert evaluation.',
};

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    body: 'Contact us to schedule a confidential consultation. We can meet in person at our New York office or conduct a preliminary review via secure digital submission.',
  },
  {
    number: '02',
    title: 'Expert Evaluation',
    body: 'Our team examines each piece individually — assessing authenticity, condition, provenance, and current market demand. All evaluations are conducted by certified gemologists.',
  },
  {
    number: '03',
    title: 'Private Offer',
    body: 'We present a written offer based on current wholesale and retail market data. There is no obligation, and all information is treated with the utmost discretion.',
  },
  {
    number: '04',
    title: 'Prompt Settlement',
    body: 'Upon acceptance, we handle all documentation and settlement is arranged immediately — typically within 24 to 48 hours of agreement.',
  },
];

export default function AcquisitionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800&q=85"
            alt="Estate jewelry acquisitions"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-[#2C2C2C]/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-12 pb-16">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Private Service
            </p>
            <h1
              className="text-white text-5xl md:text-6xl lg:text-7xl max-w-2xl leading-[1.05]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              We Buy Fine Jewelry & Estate Collections
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2
              className="text-[#2C2C2C] text-4xl md:text-5xl leading-[1.1] mb-0"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Discreet Acquisition by Trusted Specialists
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-[#2C2C2C]/55 text-sm leading-[1.9]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Whether you are managing an estate, consolidating a collection, or simply ready to part with a cherished piece, Maison Aure offers a private and respectful acquisition process. We work with discretion, speed, and the kind of expertise that only comes from decades in the trade.
            </p>
            <p className="text-[#2C2C2C]/55 text-sm leading-[1.9] mt-5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Our network of private buyers and collectors allows us to offer competitive prices that auction houses and retail jewelers simply cannot match — without the commissions, waiting periods, or public exposure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-8 md:px-12 bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#A8935A] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Process
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div>
                  <span
                    className="text-[#A8935A]/40 text-sm block mb-5"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-[#2C2C2C] text-xl mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#2C2C2C]/50 text-sm leading-[1.8]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    {step.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands accepted */}
      <section className="py-20 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#2C2C2C]/40 mb-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Signed Jewelry & Designer Houses We Acquire
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand} delay={i * 0.05}>
                <span
                  className="text-[#2C2C2C]/30 text-sm tracking-[0.15em]"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                >
                  {brand}
                </span>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <p className="text-center text-[11px] text-[#2C2C2C]/35 mt-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              And many others. We evaluate all fine jewelry regardless of maker.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-12 bg-[#2C2C2C]">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-[#F8F5F0] text-4xl md:text-5xl mb-6 leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Begin a Confidential Conversation
            </h2>
            <p className="text-[#F8F5F0]/45 text-sm leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Reach out to arrange a private consultation. All inquiries are handled with complete discretion.
            </p>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white/70 hover:border-white hover:text-white">
              Begin Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
